export default function KpiCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-gutter mb-space-lg">
      <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
        <div className="flex items-center justify-between mb-space-sm">
          <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold">
            Total Warga Terdaftar
          </span>
          <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary-container group-hover:bg-primary-fixed transition-colors">
            <span className="material-symbols-outlined text-xl">groups</span>
          </div>
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="font-display text-display text-on-surface font-bold leading-none">428</span>
          <span className="font-title-md text-title-md text-on-surface-variant font-medium">Jiwa</span>
        </div>
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-secondary font-semibold">
            <span className="material-symbols-outlined text-sm">trending_up</span>
            <span>+12 jiwa bulan ini (registrasi baru)</span>
          </div>
          <div className="flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant pt-1">
            <span>128 KK</span>
            <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
            <span>104 Rumah Terisi</span>
            <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
            <span className="text-error font-medium">6 Kosong</span>
          </div>
        </div>
        <div className="w-full bg-surface-container rounded-full h-1.5 mt-3 overflow-hidden">
          <div className="bg-secondary h-1.5 rounded-full" style={{ width: '94.5%' }}></div>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
        <div className="flex items-center justify-between mb-space-sm">
          <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold">
            Kas RT Saat Ini
          </span>
          <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary-container group-hover:bg-primary-fixed transition-colors">
            <span className="material-symbols-outlined text-xl">payments</span>
          </div>
        </div>
        <div className="flex items-baseline gap-1 mb-2">
          <span className="font-display text-display text-on-surface font-bold leading-none truncate">
            Rp 48.650.000
          </span>
        </div>
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center justify-between font-label-sm text-label-sm">
            <span className="text-secondary font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">check_circle</span> 94.2% Iuran Terkumpul
            </span>
            <span className="text-on-surface-variant">Target: 100%</span>
          </div>
          <div className="flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant pt-1">
            <span className="text-secondary">+Rp 8.400.000 msk</span>
            <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
            <span className="text-error">-Rp 3.150.000 klr</span>
          </div>
        </div>
        <div className="w-full bg-surface-container rounded-full h-1.5 mt-3 overflow-hidden">
          <div className="bg-primary-container h-1.5 rounded-full" style={{ width: '94.2%' }}></div>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
        <div className="flex items-center justify-between mb-space-sm">
          <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold">
            Pengajuan Surat
          </span>
          <div className="w-10 h-10 rounded-xl bg-error-container/40 flex items-center justify-center text-error group-hover:bg-error-container transition-colors">
            <span className="material-symbols-outlined text-xl">mark_email_unread</span>
          </div>
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="font-display text-display text-on-surface font-bold leading-none text-primary-container">
            5
          </span>
          <span className="font-title-sm text-title-sm text-on-surface-variant font-medium">
            Menunggu Verifikasi
          </span>
        </div>
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface font-medium">
            <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
            <span>Perlu ditandatangani Ketua RT</span>
          </div>
          <div className="flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant pt-1">
            <span>38 Diterbitkan bln ini</span>
            <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
            <span className="text-secondary font-medium">Rata-rata 24m selesai</span>
          </div>
        </div>
        <div className="w-full bg-surface-container rounded-full h-1.5 mt-3 overflow-hidden">
          <div className="bg-secondary h-1.5 rounded-full" style={{ width: '88%' }}></div>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
        <div className="flex items-center justify-between mb-space-sm">
          <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold">
            Aduan &amp; Pos Ronda
          </span>
          <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-tertiary group-hover:bg-tertiary-fixed transition-colors">
            <span className="material-symbols-outlined text-xl">local_police</span>
          </div>
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="font-display text-display text-on-surface font-bold leading-none">2</span>
          <span className="font-title-sm text-title-sm text-on-surface-variant font-medium">
            Perlu Tindak Lanjut
          </span>
        </div>
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-secondary font-medium">
            <span className="material-symbols-outlined text-sm">verified</span>
            <span>8 Aduan terselesaikan bln ini</span>
          </div>
          <div className="flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant pt-1">
            <span>Pos Keamanan: Siaga A</span>
            <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
            <span className="text-secondary font-medium">CCTV 8/8 Aktif</span>
          </div>
        </div>
        <div className="w-full bg-surface-container rounded-full h-1.5 mt-3 overflow-hidden">
          <div className="bg-secondary h-1.5 rounded-full" style={{ width: '80%' }}></div>
        </div>
      </div>
    </div>
  )
}
