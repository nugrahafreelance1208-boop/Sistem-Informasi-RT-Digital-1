# SIP-RT Digital — Integrasi Supabase (Skenario + Skema)

## 1. Skenario inline project
RT 04/RW 08 Sukamaju butuh 1 database untuk 4 modul yang sekarang masih `mockData.js`:
Dashboard (KPI 428 jiwa, kas Rp 48,6jt, 5 surat, agenda, pengumuman),
Data Warga (128 KK, filter blok/domisili/verifikasi, masking NIK, detail anggota),
Keuangan (tagihan per KK per periode, buku kas, alokasi 50/35/15, tren 6 bulan, rasio 94.8%),
Surat (workflow 5 tahap, 4 tab filter, preview A4 + QR, 5 template).

Alur: Warga/KK -> Tagihan per periode -> Bayar (QRIS/VA/tunai/slip) -> Buku kas
-> Surat cek KK + status iuran -> TTD Ketua RT -> Arsip QR.
Semua list di UI wajib query Supabase, bukan mock.

## 2. Setup 5 menit
1. Buat project di supabase.com, salin URL + anon key.
2. Isi `.env` (lihat `.env.example`):
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...
3. SQL Editor > run berurutan:
`supabase/01_core.sql`, `02_keuangan.sql`, `03_surat_agenda.sql`,
`04_views_rls.sql`, `05_seed_core.sql`, `06_seed_warga_a.sql`,
`07_seed_warga_b.sql`, `08_seed_keuangan.sql`, `09_seed_surat.sql`, `10_seed_agenda.sql`
4. `cmd /c npm.cmd install`, `cmd /c npm.cmd run dev`.
5. Jika `.env` kosong, app otomatis Mode Lokal (mock). Jika terisi: badge Live Supabase.
