export const NAV_ITEMS = [
  { label: 'Dashboard Utama', icon: 'dashboard', path: 'dashboard', href: '#/' },
  { label: 'Kependudukan & KK', icon: 'badge', path: 'data-warga', href: '#/data-warga' },
  { label: 'Keuangan & Iuran', icon: 'account_balance_wallet', path: 'keuangan-iuran', href: '#/keuangan' },
  { label: 'Layanan Surat Digital', icon: 'description', path: 'layanan-surat-digital', href: '#/surat' },
  { label: 'Pengaduan & Waspada', icon: 'fmd_bad', path: 'pengaduan-waspada', href: '#/pengaduan' },
  { label: 'Pengaturan Sistem', icon: 'settings', path: 'pengaturan-sistem', href: '#/pengaturan' }
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

export const BLOK_OPTIONS = [
  { value: 'all', label: 'Semua Blok' },
  { value: 'blok-a', label: 'Blok A (Asri)' },
  { value: 'blok-b', label: 'Blok B (Boulevard)' },
  { value: 'blok-c', label: 'Blok C (Cendana)' }
]

export const DOMISILI_OPTIONS = [
  { value: 'all', label: 'Status Domisili' },
  { value: 'tetap', label: 'Warga Tetap' },
  { value: 'kontrak', label: 'Kontrak / Sewa' },
  { value: 'kos', label: 'Kos / Bujang' },
  { value: 'mutasi', label: 'Mutasi Keluar' }
]

export const VERIFIKASI_OPTIONS = [
  { value: 'all', label: 'Status Verifikasi' },
  { value: 'verified', label: 'Terverifikasi' },
  { value: 'pending', label: 'Menunggu Verifikasi' }
]

function maskNik(full) {
  return `${full.slice(0, 6)}******${full.slice(-4)}`
}

function initials(name) {
  return name
    .replace(/^Kel\.\s+/i, '')
    .replace(/^Hj\.\s+/i, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('')
}

export const KARTU_KELUARGA = [
  {
    key: 'rahmat',
    blok: 'Blok B3 No. 12',
    jalan: 'Jl. Asri Boulevard',
    blokGroup: 'blok-b',
    kepala: 'Kel. Rahmat Hidayat',
    namaPendek: 'Rahmat Hidayat',
    nikFull: '3275012803831092',
    anggota: 4,
    statusTinggal: 'Tetap',
    statusTinggalKey: 'tetap',
    iuran: 'Lunas',
    verifikasi: 'Sah',
    verifikasiKey: 'verified',
    alert: false,
    noKK: '3275010903120042',
    kontak: '+62 812-8821-9921',
    iuranLabel: 'Lunas (Okt 2024)',
    members: [
      { nama: 'Rahmat Hidayat', meta: 'Kepala Keluarga • 41 Thn • Karyawan Swasta', primary: true },
      { nama: 'Nurul Wahyuni', meta: 'Istri • 38 Thn • Wiraswasta', primary: false },
      { nama: 'Faris Ramadhan', meta: 'Anak (Pertama) • 14 Thn • Pelajar', primary: false },
      { nama: 'Alya Azkadina', meta: 'Anak (Kedua) • 8 Thn • Pelajar', primary: false }
    ]
  },
  {
    key: 'hendra',
    blok: 'Blok A1 No. 04',
    jalan: 'Jl. Mawar Raya',
    blokGroup: 'blok-a',
    kepala: 'Kel. Hendra Gunawan',
    namaPendek: 'Hendra Gunawan',
    nikFull: '3275011409824421',
    anggota: 3,
    statusTinggal: 'Tetap',
    statusTinggalKey: 'tetap',
    iuran: 'Lunas',
    verifikasi: 'Sah',
    verifikasiKey: 'verified',
    alert: false,
    noKK: '3275011409824421',
    kontak: '+62 813-2204-7710',
    iuranLabel: 'Lunas (Okt 2024)',
    members: [
      { nama: 'Hendra Gunawan', meta: 'Kepala Keluarga • 42 Thn • PNS Guru', primary: true },
      { nama: 'Dewi Lestari', meta: 'Istri • 39 Thn • Ibu Rumah Tangga', primary: false },
      { nama: 'Bagas Pratama', meta: 'Anak • 12 Thn • Pelajar', primary: false }
    ]
  },
  {
    key: 'rizky',
    blok: 'Blok C2 No. 08',
    jalan: 'Jl. Cendana IV',
    blokGroup: 'blok-c',
    kepala: 'Kel. Rizky Mahendra',
    namaPendek: 'Rizky Mahendra',
    nikFull: '3275010901958890',
    anggota: 2,
    statusTinggal: 'Kontrak/Sewa',
    statusTinggalKey: 'kontrak',
    iuran: 'Belum Bayar',
    verifikasi: 'Cek KTP',
    verifikasiKey: 'pending',
    alert: true,
    noKK: '3275010901958890',
    kontak: '+62 857-6400-1182',
    iuranLabel: 'Menunggak (Sep–Okt 2024)',
    members: [
      { nama: 'Rizky Mahendra', meta: 'Kepala Keluarga • 29 Thn • Driver Online', primary: true },
      { nama: 'Putri Anjani', meta: 'Istri • 27 Thn • Karyawan Toko', primary: false }
    ]
  },
  {
    key: 'siti',
    blok: 'Blok B1 No. 07',
    jalan: 'Jl. Boulevard Barat',
    blokGroup: 'blok-b',
    kepala: 'Kel. Hj. Siti Aminah',
    namaPendek: 'Siti Aminah',
    nikFull: '3275015506603311',
    anggota: 5,
    statusTinggal: 'Tetap',
    statusTinggalKey: 'tetap',
    iuran: 'Lunas',
    verifikasi: 'Sah',
    verifikasiKey: 'verified',
    alert: false,
    noKK: '3275015506603311',
    kontak: '+62 822-1405-6630',
    iuranLabel: 'Lunas (Okt 2024)',
    members: [
      { nama: 'Hj. Siti Aminah', meta: 'Kepala Keluarga • 64 Thn • Pensiunan', primary: true },
      { nama: 'Agus Santoso', meta: 'Anak • 40 Thn • Wiraswasta', primary: false },
      { nama: 'Rina Marlina', meta: 'Menantu • 38 Thn • Guru PAUD', primary: false },
      { nama: 'Nadia Putri', meta: 'Cucu • 15 Thn • Pelajar', primary: false },
      { nama: 'Rizki Ramadhan', meta: 'Cucu • 10 Thn • Pelajar', primary: false }
    ]
  },
  {
    key: 'denny',
    blok: 'Blok A4 No. 19',
    jalan: 'Jl. Kenanga Mas',
    blokGroup: 'blok-a',
    kepala: 'Kel. Denny Kusuma',
    namaPendek: 'Denny Kusuma',
    nikFull: '3275011112980019',
    anggota: 1,
    statusTinggal: 'Kos / Bujang',
    statusTinggalKey: 'kos',
    iuran: 'Lunas',
    verifikasi: 'Sah',
    verifikasiKey: 'verified',
    alert: false,
    noKK: '3275011112980019',
    kontak: '+62 896-3110-4527',
    iuranLabel: 'Lunas (Okt 2024)',
    members: [{ nama: 'Denny Kusuma', meta: 'Penghuni Kos • 26 Thn • Karyawan Swasta', primary: true }]
  }
]

KARTU_KELUARGA.forEach((k) => {
  k.nikMasked = maskNik(k.nikFull)
  k.members.forEach((m) => {
    m.initials = initials(m.nama)
  })
})

export const KEUANGAN_TABS = [
  { key: 'tagihan', label: 'Tagihan & Iuran Warga', icon: 'receipt_long', badge: '128 KK' },
  { key: 'bukukas', label: 'Buku Kas & Pengeluaran', icon: 'menu_book' },
  { key: 'tarif', label: 'Pengaturan Tarif Iuran', icon: 'tune' },
  { key: 'audit', label: 'Laporan Audit & SPJ', icon: 'verified_user' }
]

export const PERIODE_OPTIONS = [
  { value: 'okt-2024', label: 'Oktober 2024' },
  { value: 'sep-2024', label: 'September 2024' },
  { value: 'agu-2024', label: 'Agustus 2024' },
  { value: 'jul-2024', label: 'Juli 2024' }
]

export const IURAN_STATUS_OPTIONS = [
  { value: 'all', label: 'Semua Status (128 KK)' },
  { value: 'lunas', label: 'Lunas (121 KK)' },
  { value: 'menunggak', label: 'Menunggak (7 KK)' },
  { value: 'bebas', label: 'Bebas Iuran Lansia/Dhuafa (4 KK)' }
]

export const METODE_OPTIONS = [
  { value: 'all', label: 'Semua Saluran Bayar' },
  { value: 'qris', label: 'QRIS & Virtual Account (Otomatis)' },
  { value: 'transfer', label: 'Transfer Bank Manual' },
  { value: 'tunai', label: 'Kas Tunai (Koordinator Gang)' }
]

export const ALOKASI_TARIF = [
  {
    nama: 'Keamanan & Pos Ronda',
    persen: '50% dari total',
    nominal: 'Rp 50.000',
    icon: 'shield',
    box: 'bg-primary-container text-on-primary',
    amount: 'text-primary-container'
  },
  {
    nama: 'Petugas Sampah & DLH',
    persen: '35% dari total',
    nominal: 'Rp 35.000',
    icon: 'delete_sweep',
    box: 'bg-secondary text-on-secondary',
    amount: 'text-secondary'
  },
  {
    nama: 'Dana Sosial & Takziah',
    persen: '15% dari total',
    nominal: 'Rp 15.000',
    icon: 'volunteer_activism',
    box: 'bg-tertiary-container text-on-tertiary',
    amount: 'text-on-surface'
  }
]

export const IURAN_LIST = [
  {
    key: 'agus',
    nama: 'Agus Salim',
    nik: '3271040809780002',
    initials: 'AS',
    blok: 'Blok B2 No. 14',
    gang: 'Gang Anggrek',
    nominal: 'Rp 100.000',
    rincian: 'Kebersihan (35k) + Ronda (50k) + Sos (15k)',
    metode: 'QRIS SIP-RT',
    metodeIcon: 'qr_code_2',
    metodeIconColor: 'text-secondary',
    ref: '#TRX-948102',
    refLink: false,
    status: 'Lunas',
    statusKey: 'lunas',
    statusTime: '02 Okt, 08:14',
    alert: false
  },
  {
    key: 'dian',
    nama: 'Dian Permatasari',
    nik: '3271044410880004',
    initials: 'DP',
    blok: 'Blok A1 No. 03',
    gang: 'Jalan Utama',
    nominal: 'Rp 100.000',
    rincian: 'Kebersihan (35k) + Ronda (50k) + Sos (15k)',
    metode: 'VA Mandiri',
    metodeIcon: 'account_balance',
    metodeIconColor: 'text-primary-container',
    ref: '#TRX-948110',
    refLink: false,
    status: 'Lunas',
    statusKey: 'lunas',
    statusTime: '04 Okt, 14:22',
    alert: false
  },
  {
    key: 'hendra-w',
    nama: 'Hendra Wijaya',
    nik: '3271041112850001',
    initials: 'HW',
    blok: 'Blok C3 No. 08',
    gang: 'Gang Mawar',
    nominal: 'Rp 100.000',
    rincian: 'Kebersihan (35k) + Ronda (50k) + Sos (15k)',
    metode: null,
    ref: null,
    status: 'Menunggak',
    statusKey: 'menunggak',
    statusTime: 'Jatuh Tempo: 10 Okt',
    alert: true
  },
  {
    key: 'rudi',
    nama: 'Rudi Hartono',
    nik: '3271040505800007',
    initials: 'RH',
    blok: 'Blok B1 No. 02',
    gang: 'Gang Anggrek',
    nominal: 'Rp 100.000',
    rincian: 'Kebersihan (35k) + Ronda (50k) + Sos (15k)',
    metode: 'Slip BCA',
    metodeIcon: 'upload_file',
    metodeIconColor: 'text-outline',
    ref: 'Lihat Foto Struk',
    refLink: true,
    status: 'Perlu Verifikasi',
    statusKey: 'verifikasi',
    statusTime: 'Upload 2 jam lalu',
    alert: false
  },
  {
    key: 'endang',
    nama: 'Endang Nurdin',
    nik: '3271041907720005',
    initials: 'EN',
    blok: 'Blok D1 No. 05',
    gang: 'Gang Melati',
    nominal: 'Rp 100.000',
    rincian: 'Kebersihan (35k) + Ronda (50k) + Sos (15k)',
    metode: 'Tunai Koordinator',
    metodeIcon: 'payments',
    metodeIconColor: 'text-secondary',
    ref: 'Diterima: Bpk. Joko',
    refLink: false,
    status: 'Lunas',
    statusKey: 'lunas',
    statusTime: '05 Okt, 19:30',
    alert: false
  }
]

export const EXPENSE_LIST = [
  {
    judul: 'Honor Petugas Kebersihan',
    desc: 'Pak Yanto & Pak Joko (2 Orang)',
    nominal: 'Rp 1.500.000',
    icon: 'cleaning_services',
    box: 'bg-secondary-container text-on-secondary-container',
    meta: '01 Okt 2024 • Tunai',
    doc: 'Kwitansi SPJ'
  },
  {
    judul: 'Token Listrik Pos & Lampu Jalan',
    desc: 'Gardu Utama RT 04 (PLN Mobile)',
    nominal: 'Rp 450.000',
    icon: 'bolt',
    box: 'bg-tertiary-fixed text-on-tertiary-fixed',
    meta: '03 Okt 2024 • Autodebet',
    doc: 'Struk PLN'
  },
  {
    judul: 'Perbaikan Pintu Gerbang Portal',
    desc: 'Las engsel & gembok otomatis pos 1',
    nominal: 'Rp 800.000',
    icon: 'build',
    box: 'bg-surface-container-highest text-on-surface',
    meta: '05 Okt 2024 • Mandiri Transfer',
    doc: 'Nota Bengkel Las'
  }
]

