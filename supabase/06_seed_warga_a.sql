-- SIP-RT Digital — 06 SEED WARGA (anggota per KK)
-- KK lookup via no_kk agar relasional

-- Kel. Rahmat Hidayat (4 jiwa)
insert into public.warga (kk_id,nik,nama,hubungan,hubungan_detail,umur,pekerjaan,is_kepala_keluarga,is_verified) values
((select id from public.keluarga_kk where no_kk='3275010903120042'),'3275012803831092','Rahmat Hidayat','Kepala Keluarga','Kepala Keluarga',41,'Karyawan Swasta',true,true),
((select id from public.keluarga_kk where no_kk='3275010903120042'),'3275015208861093','Nurul Wahyuni','Istri','Istri',38,'Wiraswasta',false,true),
((select id from public.keluarga_kk where no_kk='3275010903120042'),'3275011501101094','Faris Ramadhan','Anak','Anak (Pertama)',14,'Pelajar',false,true),
((select id from public.keluarga_kk where no_kk='3275010903120042'),'3275012205161095','Alya Azkadina','Anak','Anak (Kedua)',8,'Pelajar',false,true)
on conflict (nik) do nothing;

-- Kel. Hendra Gunawan (3 jiwa)
insert into public.warga (kk_id,nik,nama,hubungan,hubungan_detail,umur,pekerjaan,is_kepala_keluarga,is_verified) values
((select id from public.keluarga_kk where no_kk='3275011409824421'),'3275011409824421','Hendra Gunawan','Kepala Keluarga','Kepala Keluarga',42,'PNS Guru',true,true),
((select id from public.keluarga_kk where no_kk='3275011409824421'),'3275012105854422','Dewi Lestari','Istri','Istri',39,'Ibu Rumah Tangga',false,true),
((select id from public.keluarga_kk where no_kk='3275011409824421'),'3275011003124423','Bagas Pratama','Anak','Anak',12,'Pelajar',false,true)
on conflict (nik) do nothing;

