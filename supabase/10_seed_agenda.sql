-- SIP-RT Digital — 10 SEED AGENDA + PENGUMUMAN + PENGURUS
insert into public.agenda_kegiatan (judul,deskripsi,waktu_label,tanggal,hari_label,hari_value,is_highlight,koordinator,lokasi) values
('Ronda Malam - Regu Bravo','Koordinator: Pak Hendro (Blok B1). 5 personil warga terjadwal siap jaga.','22:00 - 04:30','2024-10-24','Malam','INI',true,'Pak Hendro (Blok B1)','Pos Ronda Utama RT 04'),
('Kerja Bakti Akbar & Saluran Air','Pembersihan gorong-gorong menyambut musim hujan dan persiapan lomba RT bersih.','07:00 WIB','2024-10-27','MIN','27',false,'Sie Kebersihan','Balai Warga RT 04 Sukamaju'),
('Pertemuan Warga & Laporan Kas','Balai Warga RT 04 Sukamaju. Agenda: Pembahasan penambahan CCTV gang barat.','19:30 WIB','2024-11-02','SAB','02',false,'Ketua RT','Balai Warga RT 04 Sukamaju')
on conflict do nothing;

insert into public.pengumuman (judul,isi,kategori,icon,koordinator,is_pinned) values
('Jadwal Fogging Nyamuk DBD Puskesmas','Dilaksanakan Jumat, 25 Okt pukul 08:30 WIB. Mohon warga menutup makanan dan mengamankan hewan peliharaan.','kesehatan','health_and_safety','Dikoordinasikan oleh Sie Kesehatan',true),
('Penyesuaian Jadwal Truk Sampah','Mulai 1 November, pengangkutan sampah organik & anorganik dipisah menjadi Senin-Rabu-Sabtu.','sampah','recycling','Edaran RW 08 Sukamaju',false)
on conflict do nothing;

insert into public.pengurus (nama,peran,kontak_wa,is_aktif) values
('H. Bambang Sudiro','ketua_rt','+62 812-9000-0004',true),
('Sekretaris RT 04','sekretaris','+62 812-9000-0005',true),
('Bendahara RT 04','bendahara','+62 812-9000-0006',true)
on conflict do nothing;
