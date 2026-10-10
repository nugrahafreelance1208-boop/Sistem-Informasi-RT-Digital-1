export function maskNik(full) {
  if (!full) return '-'
  const s = String(full)
  if (s.length < 10) return s
  return `${s.slice(0, 6)}******${s.slice(-4)}`
}
export function initials(name) {
  if (!name) return '?'
  return String(name).replace(/^Kel\.\s+/i, '').replace(/^Hj\.\s+/i, '')
    .split(' ').filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join('')
}
export function pendek(nama) {
  if (!nama) return '-'
  return String(nama).replace(/^Kel\.\s+/i, '').trim()
}
export function formatRp(n) {
  if (n == null) return 'Rp 0'
  return 'Rp ' + Number(n).toLocaleString('id-ID')
}
export function formatTanggalID(iso) {
  if (!iso) return null
  try {
    const d = new Date(iso)
    return d.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })
  } catch { return null }
}
export function toTitle(s) {
  return String(s || '').toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())
}
export function mapKeluargaRow(row, tagihanByKk = {}) {
  const anggota = Array.isArray(row.anggota) ? row.anggota : []
  const kepala = anggota.find((a) => a.is_kepala_keluarga) || anggota[0]
  const nikFull = (kepala && kepala.nik) || row.no_kk || '-'
  const tag = tagihanByKk[row.id]
  let iuran = 'Lunas'
  let iuranLabel = 'Lunas (Okt 2024)'
  if (tag) {
    if (tag.status === 'lunas') { iuran = 'Lunas'; iuranLabel = 'Lunas (' + (tag.periode?.label || 'Okt 2024') + ')' }
    else if (tag.status === 'menunggak') { iuran = 'Belum Bayar'; iuranLabel = 'Menunggak (' + (tag.periode?.label || 'Okt 2024') + ')' }
    else if (tag.status === 'verifikasi') { iuran = 'Belum Bayar'; iuranLabel = 'Perlu Verifikasi' }
    else if (tag.status === 'bebas') { iuran = 'Lunas'; iuranLabel = 'Bebas Iuran' }
  } else if (row.is_alert) { iuran = 'Belum Bayar'; iuranLabel = 'Menunggak (Sep-Okt 2024)' }
  return {
    key: row.id, supabaseId: row.id,
    blok: row.alamat_blok, jalan: row.jalan || '', gang: row.gang || '',
    blokGroup: (row.blok && row.blok.kode) || 'blok-b',
    kepala: row.kepala_nama,
    namaPendek: row.kepala_nama_pendek || pendek(row.kepala_nama),
    nikFull, nikMasked: maskNik(nikFull),
    anggota: anggota.length || 1,
    statusTinggal: row.status_tinggal_label || 'Tetap',
    statusTinggalKey: row.status_tinggal || 'tetap',
    iuran, iuranLabel,
    verifikasi: row.status_verifikasi_label || 'Sah',
    verifikasiKey: row.status_verifikasi || 'verified',
    alert: Boolean(row.is_alert),
    noKK: row.no_kk, kontak: row.kontak_wa || '-',
    members: anggota.map((m) => ({
      nama: m.nama,
      meta: (m.hubungan_detail || m.hubungan || '') + ' | ' + (m.umur ?? '-') + ' Thn | ' + (m.pekerjaan || '-'),
      primary: Boolean(m.is_kepala_keluarga),
      initials: initials(m.nama),
      verified: m.is_verified !== false,
    })),
  }
}
const METODE_ICON = {
  'QRIS SIP-RT': { icon: 'qr_code_2', color: 'text-secondary' },
  'VA Mandiri': { icon: 'account_balance', color: 'text-primary-container' },
  'Slip BCA': { icon: 'upload_file', color: 'text-outline' },
  'Tunai Koordinator': { icon: 'payments', color: 'text-secondary' },
}
export function mapTagihanRow(row) {
  const kk = row.kk || {}
  const metodeLabel = row.metode_label || null
  const iconMeta = (metodeLabel && METODE_ICON[metodeLabel]) || { icon: 'receipt', color: 'text-outline' }
  const nama = kk.kepala_nama_pendek || pendek(kk.kepala_nama || 'Warga')
  return {
    key: row.id, supabaseId: row.id, nama,
    nik: kk.no_kk || '-', initials: initials(nama),
    blok: kk.alamat_blok || '-', gang: kk.gang || kk.jalan || '-',
    nominal: formatRp(row.nominal), nominalRaw: row.nominal,
    rincian: row.rincian || 'Kebersihan (35k) + Ronda (50k) + Sos (15k)',
    metode: metodeLabel, metodeIcon: iconMeta.icon, metodeIconColor: iconMeta.color,
    ref: row.ref_code || null,
    refLink: String(row.ref_code || '').toLowerCase().includes('struk'),
    status: row.status_label || 'Menunggak',
    statusKey: row.status || 'menunggak',
    statusTime: row.status_time || '',
    alert: row.status === 'menunggak',
    periode: row.periode,
  }
}
export function mapKasToExpense(row) {
  const tgl = row.tanggal ? formatTanggalID(row.tanggal) : ''
  return {
    judul: row.judul, desc: row.deskripsi || '',
    nominal: formatRp(row.nominal),
    icon: row.icon || (row.jenis === 'masuk' ? 'payments' : 'output'),
    box: row.jenis === 'masuk' ? 'bg-secondary-container text-on-secondary-container' : 'bg-surface-container-highest text-on-surface',
    meta: ((tgl || '') + ' | ' + (row.metode || '')).trim(),
    doc: row.bukti_doc || 'Bukti Kas',
  }
}
export function mapTrenToBars(rows) {
  const baseX = [75, 175, 275, 375, 475, 575]
  return rows.map((r, i) => ({
    x: r.gx ?? baseX[i] ?? 75 + i * 100,
    rx: r.grx ?? 40,
    rh: r.grh ?? Math.max(40, Math.round((r.realisasi / 10000000) * 160)),
    bx: r.gbx ?? ((r.gx ?? baseX[i] ?? 75) + 26),
    by: r.gby ?? 140,
    bh: r.gbh ?? Math.max(20, Math.round((r.beban / 10000000) * 60)),
    label: r.bulan_label, active: Boolean(r.is_aktif),
    realisasi: r.realisasi, beban: r.beban,
  }))
}
