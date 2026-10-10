-- SIP-RT Digital — 04 VIEWS + RLS (run setelah 01-03)
create or replace view public.v_dashboard_kpi as
select
  (select count(*) from public.keluarga_kk) as total_kk,
  (select count(*) from public.warga) as total_jiwa,
  (select count(*) from public.surat_permohonan
    where status_key in ('menunggu','verifikasi')) as surat_menunggu,
  (select coalesce(sum(nominal),0) from public.transaksi_kas
    where jenis='masuk') as total_masuk,
  (select coalesce(sum(nominal),0) from public.transaksi_kas
    where jenis='keluar') as total_keluar;

create or replace view public.v_iuran_rasio as
select p.kode as periode,
  count(t.id) filter (where t.status='lunas') as lunas,
  count(t.id) filter (where t.status='menunggak') as menunggak,
  count(t.id) filter (where t.status='bebas') as bebas,
  count(t.id) as total
from public.periode_iuran p
left join public.tagihan_iuran t on t.periode_id = p.id
group by p.kode, p.bulan, p.tahun order by p.tahun, p.bulan;

alter table public.wilayah enable row level security;
alter table public.blok enable row level security;
alter table public.keluarga_kk enable row level security;
alter table public.warga enable row level security;
alter table public.periode_iuran enable row level security;
alter table public.tarif_alokasi enable row level security;
alter table public.tagihan_iuran enable row level security;
alter table public.transaksi_kas enable row level security;
alter table public.keuangan_tren enable row level security;
alter table public.surat_template enable row level security;
alter table public.surat_permohonan enable row level security;
alter table public.agenda_kegiatan enable row level security;
alter table public.pengumuman enable row level security;
alter table public.pengurus enable row level security;

-- Baca publik untuk dashboard pengurus (ketatkan setelah Auth aktif)
create policy "public read wilayah" on public.wilayah for select using (true);
create policy "public read blok" on public.blok for select using (true);
create policy "public read kk" on public.keluarga_kk for select using (true);
create policy "public read warga" on public.warga for select using (true);
create policy "public read periode" on public.periode_iuran for select using (true);
create policy "public read tarif" on public.tarif_alokasi for select using (true);
create policy "public read tagihan" on public.tagihan_iuran for select using (true);
create policy "public read kas" on public.transaksi_kas for select using (true);
create policy "public read tren" on public.keuangan_tren for select using (true);
create policy "public read template" on public.surat_template for select using (true);
create policy "public read permohonan" on public.surat_permohonan for select using (true);
create policy "public read agenda" on public.agenda_kegiatan for select using (true);
create policy "public read pengumuman" on public.pengumuman for select using (true);
create policy "public read pengurus" on public.pengurus for select using (true);

-- Tulis tahap awal (ganti ke berbasis peran setelah Auth)
create policy "pengurus write kk" on public.keluarga_kk
  for all using (true) with check (true);
create policy "pengurus write warga" on public.warga
  for all using (true) with check (true);
create policy "pengurus write tagihan" on public.tagihan_iuran
  for all using (true) with check (true);
create policy "pengurus write kas" on public.transaksi_kas
  for all using (true) with check (true);
create policy "pengurus write surat" on public.surat_permohonan
  for all using (true) with check (true);
create policy "pengurus write agenda" on public.agenda_kegiatan
  for all using (true) with check (true);
create policy "pengurus write pengumuman" on public.pengumuman
  for all using (true) with check (true);
