-- SIP-RT Digital — 01 CORE: wilayah, blok, KK, warga
-- Run di SQL Editor Supabase (urutan 01 -> 02 -> 03 -> 04_seed)
create extension if not exists "uuid-ossp";
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end $$;

create table if not exists public.wilayah (
  id uuid primary key default uuid_generate_v4(),
  rt text not null default '04', rw text not null default '08',
  kelurahan text not null default 'Sukamaju',
  kecamatan text not null default 'Cilodong',
  kota text not null default 'Depok',
  kompleks text not null default 'Kompleks Griya Asri',
  kode_registrasi text not null default 'RT04-REG-2024',
  periode_kepengurusan text not null default '2024 - 2027',
  ketua_nama text not null default 'H. Bambang Sudiro',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
drop trigger if exists trg_wilayah_updated on public.wilayah;
create trigger trg_wilayah_updated before update on public.wilayah
for each row execute function public.set_updated_at();

create table if not exists public.blok (
  id uuid primary key default uuid_generate_v4(),
  kode text unique not null, label text not null, deskripsi text,
  created_at timestamptz default now()
);

create table if not exists public.keluarga_kk (
  id uuid primary key default uuid_generate_v4(),
  no_kk text unique not null,
  kepala_nama text not null, kepala_nama_pendek text,
  blok_id uuid references public.blok(id) on delete set null,
  alamat_blok text not null, jalan text, gang text, kontak_wa text,
  status_tinggal text not null default 'tetap'
    check (status_tinggal in ('tetap','kontrak','kos','mutasi')),
  status_tinggal_label text not null default 'Tetap',
  status_verifikasi text not null default 'verified'
    check (status_verifikasi in ('verified','pending')),
  status_verifikasi_label text not null default 'Sah',
  is_alert boolean default false,
  created_at timestamptz default now(), updated_at timestamptz default now()
);
create index if not exists idx_kk_blok on public.keluarga_kk(blok_id);
drop trigger if exists trg_kk_updated on public.keluarga_kk;
create trigger trg_kk_updated before update on public.keluarga_kk
for each row execute function public.set_updated_at();

create table if not exists public.warga (
  id uuid primary key default uuid_generate_v4(),
  kk_id uuid not null references public.keluarga_kk(id) on delete cascade,
  nik text unique not null, nama text not null,
  hubungan text not null default 'Kepala Keluarga',
  hubungan_detail text, umur int, pekerjaan text,
  tempat_lahir text, tanggal_lahir date,
  gender text, agama text default 'Islam',
  is_kepala_keluarga boolean default false,
  is_verified boolean default true, avatar_url text,
  created_at timestamptz default now(), updated_at timestamptz default now()
);
create index if not exists idx_warga_kk on public.warga(kk_id);
create index if not exists idx_warga_nama on public.warga(nama);
drop trigger if exists trg_warga_updated on public.warga;
create trigger trg_warga_updated before update on public.warga
for each row execute function public.set_updated_at();
