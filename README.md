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

## Struktur

```
src/
  main.jsx
  App.jsx                 # hash routing #/ <-> #/data-warga + toast global
  index.css
  data/mockData.js        # NAV, SURAT_LIST, FINANCE_BARS, AGENDA_LIST, KARTU_KELUARGA, filter options
  pages/
    DashboardPage.jsx     # konten dashboard utama (greeting, KPI, grafik, surat)
    DataWargaPage.jsx     # halaman /data-warga (banner, KPI KK, toolbar, tabel, detail)
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
    hooks/useClock.js
```

## Fitur Data Warga (/data-warga)

- Banner Direktori Kependudukan + 3 aksi master (toast)
- 4 KPI: 128 KK, 362 Warga Tetap, 66 Kontrak/Domisili, 4 Perlu Verifikasi
- Toolbar: search nama/blok/No.KK/NIK, filter Blok (A/B/C), filter Domisili, filter Verifikasi, toggle Sensor NIK (masked `327501******1092` ↔ full), reset filter
- Tabel 5 KK persis desain (Rahmat, Hendra, Rizky-alert merah, Siti, Denny) + pagination 1-5 dari 128
- Klik baris → panel detail kanan terupdate (nama, blok, No.KK, kontak, iuran, anggota dengan inisial + verified, tombol cetak/mutasi/histori)
- Kartu keamanan UU PDP + enkripsi TLS 1.3

Design token (warna, spacing, font) 1:1 dari `tailwind.config` di file HTML desain.
