-- SIP-RT Digital — 05 SEED CORE (wilayah, blok, KK, warga)
insert into public.wilayah (rt,rw,kelurahan,kecamatan,kota,kompleks,kode_registrasi,periode_kepengurusan,ketua_nama)
values ('04','08','Sukamaju','Cilodong','Depok','Kompleks Griya Asri','RT04-REG-2024','2024 - 2027','H. Bambang Sudiro')
on conflict do nothing;

insert into public.blok (kode,label,deskripsi) values
('blok-a','Blok A (Asri)','Jl. Mawar Raya / Kenanga Mas'),
('blok-b','Blok B (Boulevard)','Jl. Asri Boulevard / Boulevard Barat'),
('blok-c','Blok C (Cendana)','Jl. Cendana IV'),
('blok-d','Blok D (Melati)','Gang Melati / Sukamaju')
on conflict (kode) do nothing;

-- 5 KK sesuai mockData.js KARTU_KELUARGA
insert into public.keluarga_kk (no_kk,kepala_nama,kepala_nama_pendek,blok_id,alamat_blok,jalan,gang,kontak_wa,status_tinggal,status_tinggal_label,status_verifikasi,status_verifikasi_label,is_alert)
values
('3275010903120042','Kel. Rahmat Hidayat','Rahmat Hidayat',(select id from public.blok where kode='blok-b'),'Blok B3 No. 12','Jl. Asri Boulevard','Gang Anggrek','+62 812-8821-9921','tetap','Tetap','verified','Sah',false),
('3275011409824421','Kel. Hendra Gunawan','Hendra Gunawan',(select id from public.blok where kode='blok-a'),'Blok A1 No. 04','Jl. Mawar Raya','Jalan Utama','+62 813-2204-7710','tetap','Tetap','verified','Sah',false),
('3275010901958890','Kel. Rizky Mahendra','Rizky Mahendra',(select id from public.blok where kode='blok-c'),'Blok C2 No. 08','Jl. Cendana IV','Gang Mawar','+62 857-6400-1182','kontrak','Kontrak/Sewa','pending','Cek KTP',true),
('3275015506603311','Kel. Hj. Siti Aminah','Siti Aminah',(select id from public.blok where kode='blok-b'),'Blok B1 No. 07','Jl. Boulevard Barat','Gang Anggrek','+62 822-1405-6630','tetap','Tetap','verified','Sah',false),
('3275011112980019','Kel. Denny Kusuma','Denny Kusuma',(select id from public.blok where kode='blok-a'),'Blok A4 No. 19','Jl. Kenanga Mas','Gang Melati','+62 896-3110-4527','kos','Kos / Bujang','verified','Sah',false)
on conflict (no_kk) do nothing;

-- 5 KK tambahan agar IURAN_LIST relasional (Agus, Dian, Hendra W, Rudi, Endang)
insert into public.keluarga_kk (no_kk,kepala_nama,kepala_nama_pendek,blok_id,alamat_blok,jalan,gang,kontak_wa,status_tinggal,status_tinggal_label,status_verifikasi,status_verifikasi_label,is_alert)
values
('3271040809780002','Agus Salim','Agus Salim',(select id from public.blok where kode='blok-b'),'Blok B2 No. 14','Jl. Asri Boulevard','Gang Anggrek','+62 812-0000-0001','tetap','Tetap','verified','Sah',false),
('3271044410880004','Dian Permatasari','Dian Permatasari',(select id from public.blok where kode='blok-a'),'Blok A1 No. 03','Jl. Mawar Raya','Jalan Utama','+62 812-0000-0002','tetap','Tetap','verified','Sah',false),
('3271041112850001','Hendra Wijaya','Hendra Wijaya',(select id from public.blok where kode='blok-c'),'Blok C3 No. 08','Jl. Cendana IV','Gang Mawar','+62 812-0000-0003','kontrak','Kontrak/Sewa','pending','Cek KTP',true),
('3271040505800007','Rudi Hartono','Rudi Hartono',(select id from public.blok where kode='blok-b'),'Blok B1 No. 02','Jl. Boulevard Barat','Gang Anggrek','+62 812-0000-0004','tetap','Tetap','pending','Cek KTP',false),
('3271041907720005','Endang Nurdin','Endang Nurdin',(select id from public.blok where kode='blok-d'),'Blok D1 No. 05','Jl. Melati Raya','Gang Melati','+62 812-0000-0005','tetap','Tetap','verified','Sah',false)
on conflict (no_kk) do nothing;
