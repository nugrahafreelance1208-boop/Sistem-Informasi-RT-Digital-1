export default function KeuanganHeader({ onToast }) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md mb-space-lg">
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mb-1">
          <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wide font-bold">
            Modul Kas &amp; Iuran Aktif
          </span>
          <span className="text-outline text-xs">•</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">Tahun Anggaran 2024</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
          Manajemen Keuangan &amp; Iuran Warga RT 04
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl mt-0.5">
          Pencatatan kas transparan, generate tagihan otomatis per KK, rekonsiliasi gateway, dan laporan
          pertanggungjawaban terbuka.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-space-sm self-start lg:self-center">
        <button
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors shadow-sm"
          type="button"
          onClick={() => onToast('Menjalankan rekonsiliasi Bank/Gateway...')}
        >
          <span className="material-symbols-outlined text-lg text-secondary">sync_alt</span>
          <span className="font-title-sm text-title-sm">Rekonsiliasi Bank/Gateway</span>
        </button>
        <button
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors shadow-sm"
          type="button"
          onClick={() => onToast('Membuat tagihan iuran baru periode berjalan...')}
        >
          <span className="material-symbols-outlined text-lg text-primary-container">receipt_long</span>
          <span className="font-title-sm text-title-sm">Generate Tagihan Baru</span>
        </button>
        <button
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary-container text-on-primary hover:bg-secondary transition-colors shadow-sm font-semibold"
          type="button"
          onClick={() => onToast('Membuka form Catat Kas & Iuran...')}
        >
          <span className="material-symbols-outlined text-lg">add_circle</span>
          <span className="font-title-sm text-title-sm">+ Catat Kas &amp; Iuran</span>
        </button>
      </div>
    </div>
  )
}
