import { formatTanggalID, initials, toTitle } from './mappersCore'

function suratVariant(statusKey) {
  if (statusKey === 'menunggu') return 'menunggu'
  if (statusKey === 'verifikasi') return 'verifikasi'
  if (statusKey === 'arsip' || statusKey === 'selesai') return 'selesai'
  return 'revisi'
}
export function mapSuratRow(row) {
  const nama = row.preview_nama
    ? toTitle(row.preview_nama)
    : (row.warga?.nama || row.kk?.kepala_nama || '-')
  return {
    key: row.id, supabaseId: row.id, previewKey: row.id,
    kategori: row.kategori, nomor: row.nomor_surat, nama,
    kavling: row.kavling_text || '',
    keperluanLabel: row.kategori === 'SKCK' ? 'Keperluan Administrasi' : 'Keperluan',
    keperluan: row.keperluan, keperluanSub: row.keperluan_sub || '',
    keperluanSubAccent: row.status_key === 'menunggu' || row.status_key === 'arsip',
    keperluanError: row.status_key === 'perbaikan',
    berkasLabel: row.berkas_label || 'Kelengkapan Berkas',
    berkasOk: Boolean(row.berkas_ok),
    berkasText: row.berkas_text || '', berkasExtra: row.berkas_extra || null,
    diajukan: row.diajukan_at ? 'Diajukan: ' + formatTanggalID(row.diajukan_at) : null,
    statusKey: row.status_key, statusText: row.status_text,
    statusVariant: suratVariant(row.status_key),
    selected: false, _raw: row,
  }
}
export function mapSuratPreview(row) {
  return {
    judul: row.preview_judul || row.kategori,
    nomor: 'Nomor: ' + String(row.nomor_surat).split('/').join(' / '),
    nama: row.preview_nama || '-', nik: row.preview_nik || row.warga?.nik || '-',
    lahir: row.preview_lahir || '-', gender: row.preview_gender || '-',
    alamat: row.preview_alamat || row.kavling_text || '-',
    keperluan: row.preview_keperluan || row.keperluan || '-',
    tanggal: row.preview_tanggal || (row.signed_at ? formatTanggalID(row.signed_at) : formatTanggalID(row.diajukan_at)) || '-',
  }
}
export function mapSuratToTableRow(row, idx = 0) {
  const nama = toTitle(row.preview_nama || row.warga?.nama || row.kk?.kepala_nama || 'Warga')
  const statusMap = {
    menunggu: { status: 'Menunggu RT', s: 'bg-[#FFFBEB] text-[#92400E]', d: 'bg-[#F59E0B]' },
    verifikasi: { status: 'Syarat Lengkap', s: 'bg-[#ECFDF5] text-[#065F46]', d: 'bg-[#10B981]' },
    perbaikan: { status: 'Menunggu RT', s: 'bg-[#FFFBEB] text-[#92400E]', d: 'bg-[#F59E0B]' },
    arsip: { status: 'Verifikasi Kasie', s: 'bg-[#F0F9FF] text-[#0369A1]', d: 'bg-[#0EA5E9]' },
    selesai: { status: 'Verifikasi Kasie', s: 'bg-[#F0F9FF] text-[#0369A1]', d: 'bg-[#0EA5E9]' },
  }
  const m = statusMap[row.status_key] || statusMap.menunggu
  return {
    id: row.id, nama, nik: row.preview_nik || row.warga?.nik || '-',
    jenis: toTitle(row.kategori || 'Surat'), keperluan: row.keperluan || '',
    blok: (row.kavling_text || '').replace('Kav. ', ''),
    waktu: row.diajukan_at ? formatTanggalID(row.diajukan_at) : ((idx + 1) * 15 + ' mnt lalu'),
    status: m.status, statusStyle: m.s, dotStyle: m.d,
    avatar: 'https://ui-avatars.com/api/?name=' + encodeURIComponent(nama) + '&background=0f5132&color=fff',
    _raw: row,
  }
}
export function mapTemplateRow(t) {
  return {
    nama: t.nama, desc: t.deskripsi || '', icon: t.icon || 'description',
    dipakai: 'Dipakai: ' + (t.dipakai_count ?? 0) + 'x',
    highlight: Boolean(t.is_highlight),
  }
}
export function mapAgendaRow(a, idx = 0) {
  return {
    id: a.id ?? idx, highlight: Boolean(a.is_highlight),
    dayLabel: a.hari_label || '-', dayValue: a.hari_value || '-',
    title: a.judul, time: a.waktu_label || '', desc: a.deskripsi || '',
  }
}
export function mapPengumumanRow(p) {
  return { judul: p.judul, isi: p.isi, icon: p.icon || 'campaign', koordinator: p.koordinator || '' }
}
