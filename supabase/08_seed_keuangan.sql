-- SIP-RT Digital — 08 SEED KEUANGAN (periode, tarif, tagihan, kas, tren)
insert into public.periode_iuran (kode,label,bulan,tahun,target_total,jatuh_tempo,is_aktif) values
('jul-2024','Juli 2024',7,2024,13500000,'2024-07-10',false),
('agu-2024','Agustus 2024',8,2024,13500000,'2024-08-10',false),
('sep-2024','September 2024',9,2024,13500000,'2024-09-10',false),
('okt-2024','Oktober 2024',10,2024,13500000,'2024-10-10',true)
on conflict (kode) do nothing;

insert into public.tarif_alokasi (nama,persen,nominal,icon,sk_nomor,is_aktif,urutan) values
('Keamanan & Pos Ronda',50,50000,'shield','SK-RT/004/2024',true,1),
('Petugas Sampah & DLH',35,35000,'delete_sweep','SK-RT/004/2024',true,2),
('Dana Sosial & Takziah',15,15000,'volunteer_activism','SK-RT/004/2024',true,3)
on conflict do nothing;

-- Tagihan Okt 2024 — 5 baris inline IURAN_LIST
insert into public.tagihan_iuran (kk_id,periode_id,nominal,rincian,metode,metode_label,ref_code,status,status_label,status_time,paid_at) values
((select id from public.keluarga_kk where no_kk='3271040809780002'),(select id from public.periode_iuran where kode='okt-2024'),100000,'Kebersihan (35k) + Ronda (50k) + Sos (15k)','qris','QRIS SIP-RT','#TRX-948102','lunas','Lunas','02 Okt, 08:14','2024-10-02 08:14:00+07'),
((select id from public.keluarga_kk where no_kk='3271044410880004'),(select id from public.periode_iuran where kode='okt-2024'),100000,'Kebersihan (35k) + Ronda (50k) + Sos (15k)','qris','VA Mandiri','#TRX-948110','lunas','Lunas','04 Okt, 14:22','2024-10-04 14:22:00+07'),
((select id from public.keluarga_kk where no_kk='3271041112850001'),(select id from public.periode_iuran where kode='okt-2024'),100000,'Kebersihan (35k) + Ronda (50k) + Sos (15k)',null,null,null,'menunggak','Menunggak','Jatuh Tempo: 10 Okt',null),
((select id from public.keluarga_kk where no_kk='3271040505800007'),(select id from public.periode_iuran where kode='okt-2024'),100000,'Kebersihan (35k) + Ronda (50k) + Sos (15k)','transfer','Slip BCA','Lihat Foto Struk','verifikasi','Perlu Verifikasi','Upload 2 jam lalu',null),
((select id from public.keluarga_kk where no_kk='3271041907720005'),(select id from public.periode_iuran where kode='okt-2024'),100000,'Kebersihan (35k) + Ronda (50k) + Sos (15k)','tunai','Tunai Koordinator','Diterima: Bpk. Joko','lunas','Lunas','05 Okt, 19:30','2024-10-05 19:30:00+07')
on conflict (kk_id,periode_id) do nothing;

-- Tagihan Sep 2024 untuk KK inti (contoh historis: rizky menunggak 2 bulan)
insert into public.tagihan_iuran (kk_id,periode_id,nominal,status,status_label,status_time) values
((select id from public.keluarga_kk where no_kk='3275010903120042'),(select id from public.periode_iuran where kode='sep-2024'),100000,'lunas','Lunas','12 Sep, 09:00'),
((select id from public.keluarga_kk where no_kk='3275010901958890'),(select id from public.periode_iuran where kode='sep-2024'),100000,'menunggak','Menunggak','Jatuh Tempo: 10 Sep')
on conflict (kk_id,periode_id) do nothing;

-- Buku kas: 3 pengeluaran (EXPENSE_LIST) + 2 pemasukan agregat
insert into public.transaksi_kas (periode_id,jenis,judul,deskripsi,nominal,metode,tanggal,kategori,bukti_doc,icon) values
((select id from public.periode_iuran where kode='okt-2024'),'keluar','Honor Petugas Kebersihan','Pak Yanto & Pak Joko (2 Orang)',1500000,'Tunai','2024-10-01','Kebersihan','Kwitansi SPJ','cleaning_services'),
((select id from public.periode_iuran where kode='okt-2024'),'keluar','Token Listrik Pos & Lampu Jalan','Gardu Utama RT 04 (PLN Mobile)',450000,'Autodebet','2024-10-03','Listrik','Struk PLN','bolt'),
((select id from public.periode_iuran where kode='okt-2024'),'keluar','Perbaikan Pintu Gerbang Portal','Las engsel & gembok otomatis pos 1',800000,'Mandiri Transfer','2024-10-05','Ronda','Nota Bengkel Las','build'),
((select id from public.periode_iuran where kode='okt-2024'),'masuk','Iuran Warga QRIS/VA (121 KK)','Rekonsiliasi otomatis Mandiri VA',12100000,'QRIS & VA','2024-10-06','Iuran','Rekonsiliasi VA','qr_code_2'),
((select id from public.periode_iuran where kode='okt-2024'),'masuk','Iuran Tunai Koordinator Gang','Setoran Bpk. Joko & koordinator',700000,'Tunai','2024-10-06','Iuran','Buku Setoran','payments')
on conflict do nothing;

-- Tren 6 bulan untuk FinanceChart (Mei-Okt)
insert into public.keuangan_tren (bulan_label,urutan,realisasi,target_bulanan,beban,is_aktif,gx,grx,grh,gbx,gby,gbh) values
('Mei',1,8200000,9200000,3100000,false,75,45,145,101,140,50),
('Jun',2,8500000,9200000,3400000,false,175,40,150,201,132,58),
('Jul',3,8800000,9200000,3900000,false,275,38,152,301,125,65),
('Agu',4,9100000,9200000,4800000,false,375,30,160,401,105,85),
('Sep',5,7900000,9200000,2600000,false,475,44,146,501,148,42),
('Okt (Aktif)',6,8400000,9200000,3150000,true,575,34,156,601,136,54)
on conflict do nothing;
