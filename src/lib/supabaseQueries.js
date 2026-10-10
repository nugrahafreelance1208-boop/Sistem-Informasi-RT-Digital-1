import { getSupabase, isSupabaseConfigured } from './supabaseClient'

// Satu tempat untuk semua query Supabase SIP-RT.
// Semua fungsi me-return { data, error } ala supabase-js.
// Relasi inline dengan skema 01-04: blok, keluarga_kk, warga,
// periode_iuran, tagihan_iuran, transaksi_kas, keuangan_tren,
// surat_template, surat_permohonan, agenda_kegiatan, pengumuman.

export async function fetchWilayah() {
  const sb = getSupabase()
  if (!sb) return { data: null, error: new Error('Supabase belum dikonfigurasi') }
  return sb.from('wilayah').select('*').limit(1).maybeSingle()
}

export async function fetchKeluargaKK({ search = '', blokKode = 'all', tinggal = 'all', verifikasi = 'all' } = {}) {
  const sb = getSupabase()
  if (!sb) return { data: null, error: new Error('Supabase belum dikonfigurasi') }
  let q = sb
    .from('keluarga_kk')
    .select('*, blok:blok_id(kode,label), anggota:warga(id,nik,nama,hubungan,hubungan_detail,umur,pekerjaan,is_kepala_keluarga,is_verified)')
    .order('alamat_blok', { ascending: true })
  if (blokKode !== 'all') {
    const { data: blok } = await sb.from('blok').select('id').eq('kode', blokKode).maybeSingle()
    if (blok) q = q.eq('blok_id', blok.id)
    else return { data: [], error: null }
  }
  if (tinggal !== 'all') q = q.eq('status_tinggal', tinggal)
  if (verifikasi !== 'all') q = q.eq('status_verifikasi', verifikasi)
  if (search.trim()) {
    const s = `%${search.trim()}%`
    q = q.or(`kepala_nama.ilike.${s},alamat_blok.ilike.${s},no_kk.ilike.${s}`)
  }
  return q
}

export async function fetchTagihan({ periodeKode = 'okt-2024', status = 'all', metode = 'all' } = {}) {
  const sb = getSupabase()
  if (!sb) return { data: null, error: new Error('Supabase belum dikonfigurasi') }
  const { data: periode } = await sb.from('periode_iuran').select('id').eq('kode', periodeKode).maybeSingle()
  if (!periode) return { data: [], error: null }
  let q = sb
    .from('tagihan_iuran')
    .select('*, kk:kk_id(no_kk,kepala_nama,kepala_nama_pendek,alamat_blok,gang,jalan,kontak_wa,status_tinggal), periode:periode_id(kode,label)')
    .eq('periode_id', periode.id)
    .order('created_at', { ascending: true })
  if (status !== 'all') q = q.eq('status', status)
  if (metode !== 'all') q = q.eq('metode', metode)
  return q
}

export async function fetchKas({ periodeKode = 'okt-2024' } = {}) {
  const sb = getSupabase()
  if (!sb) return { data: null, error: new Error('Supabase belum dikonfigurasi') }
  const { data: periode } = await sb.from('periode_iuran').select('id').eq('kode', periodeKode).maybeSingle()
  if (!periode) return { data: [], error: null }
  return sb.from('transaksi_kas').select('*').eq('periode_id', periode.id).order('tanggal', { ascending: true })
}

export async function fetchTren() {
  const sb = getSupabase()
  if (!sb) return { data: null, error: new Error('Supabase belum dikonfigurasi') }
  return sb.from('keuangan_tren').select('*').order('urutan', { ascending: true })
}

export async function fetchTarif() {
  const sb = getSupabase()
  if (!sb) return { data: null, error: new Error('Supabase belum dikonfigurasi') }
  return sb.from('tarif_alokasi').select('*').eq('is_aktif', true).order('urutan', { ascending: true })
}

export async function fetchSurat({ statusKey = 'all' } = {}) {
  const sb = getSupabase()
  if (!sb) return { data: null, error: new Error('Supabase belum dikonfigurasi') }
  let q = sb
    .from('surat_permohonan')
    .select('*, template:template_id(slug,nama,icon), kk:kk_id(no_kk,kepala_nama,alamat_blok), warga:warga_id(nik,nama)')
    .order('diajukan_at', { ascending: false })
  if (statusKey !== 'all' && statusKey !== 'arsip') q = q.eq('status_key', statusKey)
  return q
}

export async function fetchTemplateSurat() {
  const sb = getSupabase()
  if (!sb) return { data: null, error: new Error('Supabase belum dikonfigurasi') }
  return sb.from('surat_template').select('*').eq('is_aktif', true).order('dipakai_count', { ascending: false })
}

export async function fetchAgenda() {
  const sb = getSupabase()
  if (!sb) return { data: null, error: new Error('Supabase belum dikonfigurasi') }
  return sb.from('agenda_kegiatan').select('*').order('tanggal', { ascending: true })
}

export async function fetchPengumuman() {
  const sb = getSupabase()
  if (!sb) return { data: null, error: new Error('Supabase belum dikonfigurasi') }
  return sb.from('pengumuman').select('*').order('is_pinned', { ascending: false }).order('published_at', { ascending: false })
}

export async function fetchDashboardKpi() {
  const sb = getSupabase()
  if (!sb) return { data: null, error: new Error('Supabase belum dikonfigurasi') }
  return sb.from('v_dashboard_kpi').select('*').maybeSingle()
}

export async function fetchRasioIuran() {
  const sb = getSupabase()
  if (!sb) return { data: null, error: new Error('Supabase belum dikonfigurasi') }
  return sb.from('v_iuran_rasio').select('*').order('periode', { ascending: true })
}

export { isSupabaseConfigured }
