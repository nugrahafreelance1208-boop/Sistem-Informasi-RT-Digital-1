-- SIP-RT Digital — 02 KEUANGAN: periode, tarif, tagihan, kas, tren
create table if not exists public.periode_iuran (
  id uuid primary key default uuid_generate_v4(),
  kode text unique not null, label text not null,
  bulan int not null, tahun int not null,
  target_total bigint not null default 13500000,
  jatuh_tempo date, is_aktif boolean default false,
  created_at timestamptz default now()
);
create table if not exists public.tarif_alokasi (
  id uuid primary key default uuid_generate_v4(),
  nama text not null, persen numeric not null,
  nominal bigint not null, icon text default 'shield',
  sk_nomor text default 'SK-RT/004/2024',
  is_aktif boolean default true, urutan int default 1
);
create table if not exists public.tagihan_iuran (
  id uuid primary key default uuid_generate_v4(),
  kk_id uuid not null references public.keluarga_kk(id) on delete cascade,
  periode_id uuid not null references public.periode_iuran(id) on delete cascade,
  nominal bigint not null default 100000,
  rincian text default 'Kebersihan (35k) + Ronda (50k) + Sos (15k)',
  metode text, metode_label text, ref_code text,
  status text not null default 'menunggak'
    check (status in ('lunas','menunggak','verifikasi','bebas')),
  status_label text not null default 'Menunggak',
  status_time text, bukti_url text, paid_at timestamptz,
  created_at timestamptz default now(), updated_at timestamptz default now(),
  unique(kk_id, periode_id)
);
create index if not exists idx_tagihan_periode on public.tagihan_iuran(periode_id);
create index if not exists idx_tagihan_status on public.tagihan_iuran(status);
drop trigger if exists trg_tagihan_updated on public.tagihan_iuran;
create trigger trg_tagihan_updated before update on public.tagihan_iuran
for each row execute function public.set_updated_at();
create table if not exists public.transaksi_kas (
  id uuid primary key default uuid_generate_v4(),
  periode_id uuid references public.periode_iuran(id) on delete set null,
  jenis text not null check (jenis in ('masuk','keluar')),
  judul text not null, deskripsi text, nominal bigint not null,
  metode text, tanggal date not null default current_date,
  kategori text, bukti_doc text, icon text,
  created_at timestamptz default now()
);
create index if not exists idx_kas_periode on public.transaksi_kas(periode_id);
create table if not exists public.keuangan_tren (
  id uuid primary key default uuid_generate_v4(),
  bulan_label text not null, urutan int not null,
  realisasi bigint not null, target_bulanan bigint not null default 9200000,
  beban bigint not null, is_aktif boolean default false,
  gx int, grx int, grh int, gbx int, gby int, gbh int,
  created_at timestamptz default now()
);
