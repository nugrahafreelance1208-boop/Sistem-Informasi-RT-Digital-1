-- SIP-RT Digital — 03 SURAT + AGENDA + PENGUMUMAN
create table if not exists public.surat_template (
  id uuid primary key default uuid_generate_v4(),
  slug text unique not null, nama text not null,
  deskripsi text, icon text default 'description',
  dipakai_count int default 0, is_highlight boolean default false,
  is_aktif boolean default true, created_at timestamptz default now()
);
create table if not exists public.surat_permohonan (
  id uuid primary key default uuid_generate_v4(),
  nomor_surat text unique not null,
  template_id uuid references public.surat_template(id) on delete set null,
  warga_id uuid references public.warga(id) on delete set null,
  kk_id uuid references public.keluarga_kk(id) on delete set null,
  kategori text not null, keperluan text not null,
  keperluan_sub text, kavling_text text,
  berkas_label text default 'Kelengkapan Berkas',
  berkas_ok boolean default false, berkas_text text, berkas_extra text,
  diajukan_at timestamptz default now(),
  status_key text not null default 'menunggu'
    check (status_key in ('menunggu','verifikasi','perbaikan','arsip','selesai')),
  status_text text not null default 'Menunggu TTD Digital Pak RT',
  tenggat_at date,
  preview_judul text, preview_nama text, preview_nik text,
  preview_lahir text, preview_gender text, preview_alamat text,
  preview_keperluan text, preview_tanggal text,
  qr_code text, signed_by text, signed_at timestamptz,
  created_at timestamptz default now(), updated_at timestamptz default now()
);
create index if not exists idx_surat_status on public.surat_permohonan(status_key);
drop trigger if exists trg_surat_updated on public.surat_permohonan;
create trigger trg_surat_updated before update on public.surat_permohonan
for each row execute function public.set_updated_at();
create table if not exists public.agenda_kegiatan (
  id uuid primary key default uuid_generate_v4(),
  judul text not null, deskripsi text, waktu_label text,
  tanggal date, hari_label text, hari_value text,
  is_highlight boolean default false, koordinator text,
  lokasi text default 'Balai Warga RT 04 Sukamaju',
  created_at timestamptz default now()
);
create table if not exists public.pengumuman (
  id uuid primary key default uuid_generate_v4(),
  judul text not null, isi text not null,
  kategori text default 'info', icon text default 'campaign',
  koordinator text, is_pinned boolean default false,
  published_at timestamptz default now()
);
create table if not exists public.pengurus (
  id uuid primary key default uuid_generate_v4(),
  nama text not null, peran text not null default 'pengurus',
  kontak_wa text, foto_url text, is_aktif boolean default true,
  created_at timestamptz default now()
);
