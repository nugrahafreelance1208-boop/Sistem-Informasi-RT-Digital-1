# SIP-RT Digital —Sistem Informasi RT Digital

Dashboard Utama Pengurus RT (RT 04 / RW 08 Sukamaju) dibangun ulang dari `design/dashboard_utama_pengurus_rt/code.html` menggunakan **React + Vite + TailwindCSS**.

## Cara jalan

> PowerShell di Windows memblokir `npm.ps1` secara default. Jalankan lewat `cmd`:

```bat
cmd /c npm install
cmd /c npm run dev
```

Lalu buka http://localhost:5173

## Struktur

```
src/
  main.jsx
  App.jsx
  index.css
  data/mockData.js
  components/
    Sidebar.jsx
    Header.jsx
    GreetingBar.jsx
    KpiCards.jsx
    FinanceChart.jsx
    SuratTable.jsx
    DemografiCard.jsx
    AgendaCard.jsx
    PengumumanCard.jsx
    ApprovalModal.jsx
    hooks/useClock.js
```

## Fitur

- Sidebar + header persis desain (wilayah aktif, menu administrasi, search ⌘K)
- Greeting + periode kepengurusan + jam realtime (id-ID)
- 4 KPI cards (warga, kas, surat, aduan)
- Grafik SVG tren kas 6 bulan (Mei–Okt 2024)
- Tabel surat perlu tindakan + modal tanda tangan digital
- Demografi, agenda ronda, pengumuman waspada

Design token (warna, spacing, font) 1:1 dari `tailwind.config` di file HTML desain.
