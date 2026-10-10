# SIP-RT Digital — Sistem Informasi RT Digital

Dashboard + Data Kependudukan Pengurus RT (RT 04 / RW 08 Sukamaju) dibangun ulang dari folder `design/` menggunakan **React + Vite + TailwindCSS**.

## Cara jalan

> PowerShell di Windows memblokir `npm.ps1` secara default. Jalankan lewat `cmd`:

```bat
cmd /c npm.cmd install --no-audit --no-fund
cmd /c npm.cmd run dev
```

- Dashboard: http://localhost:5173/#/
- Data Warga / KK: http://localhost:5173/#/data-warga
- Keuangan & Iuran: http://localhost:5173/#/keuangan
- Layanan Surat Digital: http://localhost:5173/#/surat

## Struktur

```
src/
  main.jsx
  App.jsx                 # hash routing #/ <-> #/data-warga + toast global
  index.css
  data/mockData.js        # NAV, SURAT_LIST, FINANCE_BARS, AGENDA_LIST, KARTU_KELUARGA, filter options, KEUANGAN_*, IURAN_LIST, EXPENSE_LIST, SURAT_*
  pages/
    DashboardPage.jsx     # konten dashboard utama (greeting, KPI, grafik, surat)
    DataWargaPage.jsx     # halaman /data-warga (banner, KPI KK, toolbar, tabel, detail)
    KeuanganPage.jsx      # halaman /keuangan (header, KPI kas, tabs, toolbar, tabel iuran, alokasi, panel kanan)
    SuratPage.jsx         # halaman /surat (header, stepper, filter tabs, kartu permohonan, preview, katalog)
  components/
    Sidebar.jsx           # navigasi aktif antar halaman
    Header.jsx
    GreetingBar.jsx
    KpiCards.jsx
    FinanceChart.jsx
    SuratTable.jsx
    DemografiCard.jsx
    AgendaCard.jsx
    PengumumanCard.jsx
    ApprovalModal.jsx
    warga/
      WargaBanner.jsx     # judul direktori + Import/Export/Tambah KK
      WargaKpi.jsx        # 128 KK, 362 tetap, 66 kontrak, 4 verifikasi
      WargaToolbar.jsx    # search + 3 filter + toggle Sensor NIK + reset
      WargaBadges.jsx     # badge status tinggal / iuran / verifikasi
      WargaTable.jsx      # tabel 5 KK + masking NIK
      WargaDetailInfo.jsx # header detail + No.KK + kontak + iuran
      WargaDetail.jsx     # anggota keluarga + aksi + kartu keamanan UU PDP
    keuangan/
      KeuanganHeader.jsx  # badge modul aktif + 3 aksi operasional
      KeuanganKpiA.jsx    # kartu saldo kas + penerimaan
      KeuanganKpi.jsx     # wrapper 4 KPI + pengeluaran + tunggakan
      KeuanganTabs.jsx    # 4 tab modul (tagihan aktif, lainnya toast)
      KeuanganToolbar.jsx # filter periode/status/metode + WA massal + unduh/cetak
      IuranBadges.jsx     # badge Lunas/Menunggak/Perlu Verifikasi
      IuranCells.jsx      # sel metode/ref + aksi baris kontekstual
      IuranTable.jsx      # tabel 5 tagihan persis desain
      AlokasiWidget.jsx   # alokasi tarif 50/35/15 + SK-RT/004/2024
      ExpenseCard.jsx     # realisasi pengeluaran + subtotal + buku kas
      DonutCard.jsx       # donut SVG 94.8% + legenda 121/7/4
      QrisCard.jsx        # standee QRIS pembayaran mandiri
    surat/
      SuratHeader.jsx     # badge modul + kelola template + terbitkan baru
      SuratStepper.jsx    # 5 tahap workflow + rata-rata 2 jam 15 mnt
      SuratPills.jsx      # pill status menunggu/verifikasi/selesai/revisi
      SuratCardParts.jsx  # grid 3 kolom + kepala kartu
      SuratCardsA.jsx     # kartu SKCK selected + domisili usaha
      SuratCardsB.jsx     # kartu nikah siap unduh + pindah revisi
      SuratFilterTabs.jsx # 4 tab filter fungsional + urutan terbaru
      SuratDocParts.jsx   # kop surat + QR box + stempel/TTD
      SuratPreview.jsx    # live preview A4 + unduh/cetak/kirim WA
      SuratTemplates.jsx  # katalog 5 template + contador pakai
    hooks/useClock.js
```

## Fitur Data Warga (/data-warga)

- Banner Direktori Kependudukan + 3 aksi master (toast)
- 4 KPI: 128 KK, 362 Warga Tetap, 66 Kontrak/Domisili, 4 Perlu Verifikasi
- Toolbar: search nama/blok/No.KK/NIK, filter Blok (A/B/C), filter Domisili, filter Verifikasi, toggle Sensor NIK (masked `327501******1092` ↔ full), reset filter
- Tabel 5 KK persis desain (Rahmat, Hendra, Rizky-alert merah, Siti, Denny) + pagination 1-5 dari 128
- Klik baris → panel detail kanan terupdate (nama, blok, No.KK, kontak, iuran, anggota dengan inisial + verified, tombol cetak/mutasi/histori)
- Kartu keamanan UU PDP + enkripsi TLS 1.3

## Fitur Keuangan & Iuran (/keuangan)

- Sub-header Modul Kas & Iuran Aktif TA 2024 + 3 aksi (rekonsiliasi, generate tagihan, catat kas)
- 4 KPI bento: Saldo Rp 48.650.000 (VA Rp 42.150.000 + tunai Rp 6.500.000), Penerimaan Okt Rp 12.800.000 (94.8% / target Rp 13.500.000), Pengeluaran Rp 4.250.000, Tunggakan Rp 700.000 (7 KK, kolektabilitas 90.5%)
- 4 tab modul (Tagihan aktif; Buku Kas/Tarif/Audit → toast "segera hadir")
- Toolbar: filter Periode (Okt–Jul 2024), Status (semua/lunas/menunggak/bebas — fungsional), Metode (QRIS-VA/transfer/tunai — fungsional), tombol WA Massal 7 KK + unduh + cetak
- Tabel 5 tagihan persis desain (Agus QRIS lunas, Dian VA lunas, Hendra menunggak merah + Ingatkan/paid, Rudi Slip BCA perlu verifikasi + tombol Verifikasi, Endang tunai lunas) + pagination
- Widget alokasi tarif Rp 100.000 (Ronda 50k / Sampah 35k / Sosial 15k, SK-RT/004/2024)
- Panel kanan: Realisasi Pengeluaran (3 item + subtotal Rp 2.750.000 + buku kas), donut SVG 94.8% (121 lunas / 7 menunggak / 4 subsidi), kartu QRIS standee

## Fitur Layanan Surat Digital (/surat)

- Header Modul Administrasi Wilayah RT04-REG-2024 + Kelola Template & Terbitkan Surat Baru
- Stepper 5 tahap: Draft 0, Diajukan 3, Sekretaris 2, Ketua RT 4 TTD (highlight hijau), QR 38 selesai + rata-rata 2 jam 15 mnt
- 4 tab filter fungsional: Menunggu (SKCK Kevin selected + TTD/perbaikan), Verifikasi (Domisili Ratna + lampiran/WA), Perbaikan (Pindah Bambang border merah + kirim ulang), Arsip (semua 4 kartu)
- Live preview A4 sticky: kop RT04/RW08 Sukamaju-Depok, judul + nomor dinamis per kartu yang diklik (Tampil di Preview / Lihat Rincian / Lampiran), tabel data diri, QR SHA256 + stempel + TTD H. Bambang Sudiro, tombol PDF/cetak/kirim WA
- Katalog 5 template (SKCK 142x, Domisili Usaha 64x, Belum Menikah 38x, Tidak Mampu 21x, Izin Keramaian 19x) + tombol Pakai per template

Design token (warna, spacing, font) 1:1 dari `tailwind.config` di file HTML desain.
