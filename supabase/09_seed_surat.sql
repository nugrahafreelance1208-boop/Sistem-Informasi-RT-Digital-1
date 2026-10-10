-- SIP-RT Digital — 09 SEED SURAT (template + 4 permohonan + preview)
insert into public.surat_template (slug,nama,deskripsi,icon,dipakai_count,is_highlight) values
('skck','Pengantar SKCK','Untuk pembuatan SKCK baru atau perpanjangan di Polsek/Polres.','shield',142,true),
('domisili-usaha','Keterangan Domisili Usaha','Pendaftaran NIB UMKM, legalitas usaha rumahan, dan izin lingkungan.','storefront',64,false),
('belum-menikah','Keterangan Belum Menikah','Persyaratan pengajuan KPR perbankan, beasiswa, dan instansi kedinasan.','favorite',38,false),
('tidak-mampu','Keterangan Tidak Mampu','Bantuan KIS PBI BPJS, beasiswa KIP Kuliah, dan bantuan sosial dinas.','volunteer_activism',21,false),
('izin-keramaian','Izin Keramaian Lingkungan','Pemberitahuan hajatan keluarga, penutupan jalan sementara, atau pengajian akbar.','celebration',19,false)
on conflict (slug) do nothing;

-- 4 permohonan inline SURAT_APPLICATIONS_ALL + SURAT_PREVIEWS + SURAT_LIST
-- Kevin SKCK (menunggu)
insert into public.surat_permohonan (nomor_surat,template_id,warga_id,kk_id,kategori,keperluan,keperluan_sub,kavling_text,berkas_label,berkas_ok,berkas_text,diajukan_at,status_key,status_text,preview_judul,preview_nama,preview_nik,preview_lahir,preview_gender,preview_alamat,preview_keperluan,preview_tanggal) values
('04/SKCK/RT04-RW08/X/2024',
 (select id from public.surat_template where slug='skck'),
 (select id from public.warga where nik='3271040809780002'),
 (select id from public.keluarga_kk where no_kk='3271040809780002'),
 'SKCK','Melamar Pekerjaan BUMN','PT Telekomunikasi Seluler','Kav. Blok B2/14 (Warga Tetap)',
 'Kelengkapan Berkas',true,'KTP & KK Lengkap','2024-10-24 08:30:00+07',
 'menunggu','Menunggu TTD Digital Pak RT',
 'SURAT PENGANTAR KELAKUAN BAIK (SKCK)','KEVIN PRATAMA','3276021509980004','Jakarta, 15 September 1998','Laki-laki / Islam','Griya Asri Blok B2 No. 14, RT 04/08 Sukamaju','Melamar Pekerjaan BUMN (Persyaratan SKCK Kepolisian)','Depok, 24 Oktober 2024')
on conflict (nomor_surat) do nothing;

-- Ratna Domisili Usaha (verifikasi)
insert into public.surat_permohonan (nomor_surat,template_id,kk_id,kategori,keperluan,keperluan_sub,kavling_text,berkas_label,berkas_ok,berkas_text,diajukan_at,status_key,status_text,preview_judul,preview_nama,preview_nik,preview_lahir,preview_gender,preview_alamat,preview_keperluan,preview_tanggal) values
('02/SKDU/RT04-RW08/X/2024',
 (select id from public.surat_template where slug='domisili-usaha'),
 (select id from public.keluarga_kk where no_kk='3271044410880004'),
 'DOMISILI USAHA','Katering & Kue Kering Tradisional','Nama: "Dapur Bu Ratna"','Kav. Blok A3/02',
 'Catatan Petugas',false,'KTP sah, menunggu foto lokasi dapur','2024-10-23 14:15:00+07',
 'verifikasi','Verifikasi Berkas Sekretaris',
 'SURAT KETERANGAN DOMISILI USAHA','RATNA DEWI','3276025507810001','Bandung, 12 Mei 1981','Perempuan / Islam','Griya Asri Blok A3 No. 02, RT 04/08 Sukamaju','Pendaftaran NIB UMKM "Dapur Bu Ratna" (Katering & Kue Kering)','Depok, 23 Oktober 2024')
on conflict (nomor_surat) do nothing;

-- Siti Nikah (arsip/selesai)
insert into public.surat_permohonan (nomor_surat,template_id,kk_id,kategori,keperluan,keperluan_sub,kavling_text,berkas_label,berkas_ok,berkas_text,berkas_extra,status_key,status_text,preview_judul,preview_nama,preview_nik,preview_lahir,preview_gender,preview_alamat,preview_keperluan,preview_tanggal,signed_by,signed_at) values
('08/NA/RT04-RW08/X/2024',
 (select id from public.surat_template where slug='belum-menikah'),
 (select id from public.keluarga_kk where no_kk='3275015506603311'),
 'PENGANTAR NIKAH (N1-N4)','Syarat KUA Kec. Sukamaju','Validasi RW Selesai','Kav. Blok C1/09',
 'Tanggal Pengesahan',false,'22 Okt 2024','Oleh: H. Bambang Sudiro','arsip','Disetujui - Siap Unduh PDF',
 'SURAT PENGANTAR NIKAH (N1-N4)','SITI FATIMAH','3276026601990005','Depok, 26 Januari 1999','Perempuan / Islam','Griya Asri Blok C1 No. 09, RT 04/08 Sukamaju','Persyaratan Administrasi KUA Kec. Sukamaju','Depok, 22 Oktober 2024','H. Bambang Sudiro','2024-10-22 19:30:00+07')
on conflict (nomor_surat) do nothing;

-- Bambang Pindah (perbaikan)
insert into public.surat_permohonan (nomor_surat,template_id,kategori,keperluan,keperluan_sub,kavling_text,berkas_label,berkas_ok,berkas_text,berkas_extra,status_key,status_text,tenggat_at,preview_judul,preview_nama,preview_nik,preview_lahir,preview_gender,preview_alamat,preview_keperluan,preview_tanggal) values
('05/SKP/RT04-RW08/X/2024',
 (select id from public.surat_template where slug='domisili-usaha'),
 'PINDAH DOMISILI','Kode Pos & RT/RW Tujuan Belum Diisi','Pindah ke: Kota Bandung','Kav. Blok D4/18 (Pindah 3 Jiwa)',
 'Tenggat Tanggapan',false,'27 Okt 2024 (2 hari lagi)','Status notifikasi: Terkirim','perbaikan','Perlu Revisi Alamat Tujuan','2024-10-27',
 'SURAT KETERANGAN PINDAH DOMISILI','BAMBANG HENDRO','3276021005750018','Semarang, 10 Mei 1975','Laki-laki / Islam','Griya Asri Blok D4 No. 18, RT 04/08 Sukamaju (Pindah 3 Jiwa)','Pengurusan Pindah Domisili ke Kota Bandung (Menunggu Revisi Alamat Tujuan)','Depok, 24 Oktober 2024')
on conflict (nomor_surat) do nothing;
