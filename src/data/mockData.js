export const NAV_ITEMS = [
  { label: 'Dashboard Utama', icon: 'dashboard', path: 'dashboard-utama', active: true },
  { label: 'Kependudukan & KK', icon: 'badge', path: 'kependudukan-kk' },
  { label: 'Keuangan & Iuran', icon: 'account_balance_wallet', path: 'keuangan-iuran' },
  { label: 'Layanan Surat Digital', icon: 'description', path: 'layanan-surat-digital' },
  { label: 'Pengaduan & Waspada', icon: 'fmd_bad', path: 'pengaduan-waspada' },
  { label: 'Pengaturan Sistem', icon: 'settings', path: 'pengaturan-sistem' }
]

export const SURAT_LIST = [
  {
    id: 1,
    nama: 'Kevin Pratama',
    nik: '3276081902990003',
    jenis: 'Surat Pengantar SKCK',
    keperluan: 'Melamar BUMN PT Kereta Api',
    blok: 'Blok B3 No. 14',
    waktu: '15 mnt lalu',
    status: 'Menunggu RT',
    statusStyle: 'bg-[#FFFBEB] text-[#92400E]',
    dotStyle: 'bg-[#F59E0B]',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDCJS10TK6FtEX4oI_G2VNhuLQZzYw1QXh9r-oRwr9YDL4QlWBkObZKxA0G3NX7h_--yxcAT-Iumy69Vi2DtZ4vijxZh1FW3ej5O_edqPzCccVyaSs9WwtqJXU42Qclr1vi8dY8z3VKRtKGkCIrLfa4Iayj70KcfgtGavmXwWN-yHaT1sdvptl36m4aguzzVwSnkDqOahCRwuClzwROXL8Ols6XtHyUmLaJVLKhi2qtnp7jC5JR0KruAg'
  },
  {
    id: 2,
    nama: 'Ibu Ratna Dewi',
    nik: '3276085507810001',
    jenis: 'Surat Domisili Usaha',
    keperluan: 'Catering & Bakery Rumahan',
    blok: 'Blok A1 No. 08',
    waktu: '42 mnt lalu',
    status: 'Syarat Lengkap',
    statusStyle: 'bg-[#ECFDF5] text-[#065F46]',
    dotStyle: 'bg-[#10B981]',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAQX4wwMC60RPMb4f5XTlZgyEcPDFRvIIWHtEsWdIN0SFeIp6ZSBWtzPRsF1qjR8tQOfV7iweS5Hreld8qeLekHAUpftLGfifndkIQjKFgnvlFoibXXE6RdSwSNy6OQna1600WMKKHlN9gOytfnwwsjG_2h23mntRT_E-EWC9vEWO9Y_3N41KSzkGgg1ofLcquhkeIZaCnI1Y0aWnm2pu1XgKab_xxwu4yU8JzGNRWTGPYu4_-HdAbRuw'
  },
  {
    id: 3,
    nama: 'Ahmad Fauzi',
    nik: '3276080404760002',
    jenis: 'Ket. Pindah Domisili',
    keperluan: 'Kepindahan 1 Keluarga ke Bandung',
    blok: 'Blok C2 No. 05',
    waktu: '2 jam lalu',
    status: 'Menunggu RT',
    statusStyle: 'bg-[#FFFBEB] text-[#92400E]',
    dotStyle: 'bg-[#F59E0B]',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuClcsEvSsMGfqeSEJ_rPbAEtgITD5Do8n7TfUULD_MfToPv9kvAAPWBK-cAqpJRGdiXayxZjC_1a0E--9yilBddtsoFFURK-_3U7yWyTBAmg93K9e_ctXkELFHRH_0e6_zAXffwY1bAAsePVMVCgq_jWNe3afAP3dgxCrRUBw1z9kCCeTdGxthgBr-hwTC-vIc_vmvAXTNMg87OQuCW7-8bN17y_Z-RTKnXArU-_4PBxzqggbpjP4H2wA'
  },
  {
    id: 4,
    nama: 'Siti Nurhaliza',
    nik: '3276086711010005',
    jenis: 'Keterangan Tidak Mampu',
    keperluan: 'Syarat KIP Kuliah Universitas Indonesia',
    blok: 'Blok D1 No. 02',
    waktu: '3 jam lalu',
    status: 'Verifikasi Kasie',
    statusStyle: 'bg-[#F0F9FF] text-[#0369A1]',
    dotStyle: 'bg-[#0EA5E9]',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBvnQxGJxz89b6ebUdOCCwZWSzNGJv4-4-wcLvoFftUvuWSpdiQtw5B__xEEbrdhbFDQpWCpMbDUZ65K0UHqLjeBm4GPlO2P7-DoJ0ugQiAysiVnoXnE0-hFBae0n5Sjni4RXi9K5EX5NY0rM5riMS1EeXD9R-onFQn_k6OzS5948THZTZaj9pYmSsRN9XfQJfQhcjOpxPkIuciUIiCJfEhV8Shm7Xq6MYryFI7ytmd2cYoCpCrXtz_1g'
  }
]

// Bar chart geometry matches original SVG: [x, realisasiY, realisasiH, bebanX, bebanY, bebanH, label, active]
export const FINANCE_BARS = [
  { x: 75, rx: 45, rh: 145, bx: 101, by: 140, bh: 50, label: 'Mei', active: false },
  { x: 175, rx: 40, rh: 150, bx: 201, by: 132, bh: 58, label: 'Jun', active: false },
  { x: 275, rx: 38, rh: 152, bx: 301, by: 125, bh: 65, label: 'Jul', active: false },
  { x: 375, rx: 30, rh: 160, bx: 401, by: 105, bh: 85, label: 'Agu', active: false },
  { x: 475, rx: 44, rh: 146, bx: 501, by: 148, bh: 42, label: 'Sep', active: false },
  { x: 575, rx: 34, rh: 156, bx: 601, by: 136, bh: 54, label: 'Okt (Aktif)', active: true }
]

export const AGENDA_LIST = [
  {
    id: 1,
    highlight: true,
    dayLabel: 'Malam',
    dayValue: 'INI',
    title: 'Ronda Malam - Regu Bravo',
    time: '22:00 - 04:30',
    desc: 'Koordinator: Pak Hendro (Blok B1). 5 personil warga terjadwal siap jaga.'
  },
  {
    id: 2,
    highlight: false,
    dayLabel: 'MIN',
    dayValue: '27',
    title: 'Kerja Bakti Akbar & Saluran Air',
    time: '07:00 WIB',
    desc: 'Pembersihan gorong-gorong menyambut musim hujan dan persiapan lomba RT bersih.'
  },
  {
    id: 3,
    highlight: false,
    dayLabel: 'SAB',
    dayValue: '02',
    title: 'Pertemuan Warga & Laporan Kas',
    time: '19:30 WIB',
    desc: 'Balai Warga RT 04 Sukamaju. Agenda: Pembahasan penambahan CCTV gang barat.'
  }
]
