-- SIP-RT Digital — 07 SEED WARGA B (rizky, siti, denny + KK iuran)
insert into public.warga (kk_id,nik,nama,hubungan,hubungan_detail,umur,pekerjaan,is_kepala_keluarga,is_verified) values
((select id from public.keluarga_kk where no_kk='3275010901958890'),'3275010901958890','Rizky Mahendra','Kepala Keluarga','Kepala Keluarga',29,'Driver Online',true,false),
((select id from public.keluarga_kk where no_kk='3275010901958890'),'3275016501978891','Putri Anjani','Istri','Istri',27,'Karyawan Toko',false,false)
on conflict (nik) do nothing;

insert into public.warga (kk_id,nik,nama,hubungan,hubungan_detail,umur,pekerjaan,is_kepala_keluarga,is_verified) values
((select id from public.keluarga_kk where no_kk='3275015506603311'),'3275015506603311','Hj. Siti Aminah','Kepala Keluarga','Kepala Keluarga',64,'Pensiunan',true,true),
((select id from public.keluarga_kk where no_kk='3275015506603311'),'3275011004843312','Agus Santoso','Anak','Anak',40,'Wiraswasta',false,true),
((select id from public.keluarga_kk where no_kk='3275015506603311'),'3275014407863313','Rina Marlina','Menantu','Menantu',38,'Guru PAUD',false,true),
((select id from public.keluarga_kk where no_kk='3275015506603311'),'3275015209093314','Nadia Putri','Cucu','Cucu',15,'Pelajar',false,true),
((select id from public.keluarga_kk where no_kk='3275015506603311'),'3275011507143315','Rizki Ramadhan','Cucu','Cucu',10,'Pelajar',false,true)
on conflict (nik) do nothing;

insert into public.warga (kk_id,nik,nama,hubungan,hubungan_detail,umur,pekerjaan,is_kepala_keluarga,is_verified) values
((select id from public.keluarga_kk where no_kk='3275011112980019'),'3275011112980019','Denny Kusuma','Kepala Keluarga','Penghuni Kos',26,'Karyawan Swasta',true,true)
on conflict (nik) do nothing;

-- KK tambahan untuk tabel iuran (kepala = warga)
insert into public.warga (kk_id,nik,nama,hubungan,hubungan_detail,umur,pekerjaan,is_kepala_keluarga,is_verified) values
((select id from public.keluarga_kk where no_kk='3271040809780002'),'3271040809780002','Agus Salim','Kepala Keluarga','Kepala Keluarga',46,'Wiraswasta',true,true),
((select id from public.keluarga_kk where no_kk='3271044410880004'),'3271044410880004','Dian Permatasari','Kepala Keluarga','Kepala Keluarga',36,'Guru',true,true),
((select id from public.keluarga_kk where no_kk='3271041112850001'),'3271041112850001','Hendra Wijaya','Kepala Keluarga','Kepala Keluarga',39,'Karyawan Swasta',true,false),
((select id from public.keluarga_kk where no_kk='3271040505800007'),'3271040505800007','Rudi Hartono','Kepala Keluarga','Kepala Keluarga',44,'Pedagang',true,false),
((select id from public.keluarga_kk where no_kk='3271041907720005'),'3271041907720005','Endang Nurdin','Kepala Keluarga','Kepala Keluarga',52,'Pensiunan',true,true)
on conflict (nik) do nothing;
