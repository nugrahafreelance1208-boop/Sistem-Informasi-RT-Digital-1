export default function Header() {
  return (
    <header className="fixed top-0 left-0 lg:left-64 right-0 h-16 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-md">
      <div className="flex items-center gap-space-md">
        <div className="relative flex items-center w-56 sm:w-80">
          <span className="material-symbols-outlined absolute left-3 text-outline text-lg pointer-events-none">
            search
          </span>
          <input
            className="w-full pl-9 pr-12 py-1.5 bg-surface-container-lowest text-on-surface rounded-lg font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-container shadow-[0_1px_3px_rgba(15,23,42,0.04)]"
            placeholder="Cari NIK, warga, nomor surat, kavling..."
            type="text"
          />
          <kbd className="absolute right-2.5 px-1.5 py-0.5 bg-surface-container text-on-surface-variant rounded font-label-sm text-label-sm">
            ⌘K
          </kbd>
        </div>
        <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
          <span className="material-symbols-outlined text-sm text-secondary">domain</span>
          <span>RT 04 / RW 08 - Sukamaju</span>
        </div>
      </div>

      <div className="flex items-center gap-space-sm">
        <button
          className="hidden sm:flex items-center gap-1.5 bg-primary-container text-on-primary hover:bg-secondary transition-colors px-space-md py-1.5 rounded-lg shadow-[0_1px_3px_rgba(15,23,42,0.05)]"
          type="button"
        >
          <span className="material-symbols-outlined text-base">add</span>
          <span className="font-title-sm text-title-sm font-semibold">Tambah Entri Cepat</span>
        </button>
        <button
          className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
          type="button"
        >
          <span className="material-symbols-outlined text-xl">notifications</span>
          <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-error"></span>
          </span>
        </button>
        <div className="flex items-center gap-space-sm pl-2">
          <div className="hidden md:flex flex-col text-right">
            <span className="font-title-sm text-title-sm font-bold text-on-surface leading-tight">
              Bpk. H. Bambang Sudiro
            </span>
            <span className="font-label-sm text-label-sm text-on-secondary-container bg-secondary-container px-2 py-0.5 rounded-full self-end font-semibold">
              Ketua RT (Role: Administrator)
            </span>
          </div>
          <img
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover ring-2 ring-primary-fixed"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHXlIygBZdkRKVApykp43glCE2iTLsd4X91BDf9sC0u4zB35uLm8f4MAOX_qpUrsKNzdMSZlCbqDgTCUTESeFEtdzh8uw2VJz8oSVlrgxjSBCjomSy4TA251_cXWXR-C_2mf-Ljlwqoi4ikumamvlpUAPmYQPArtbiHWLfX3JE138CsyBy57XIrd7sge7NJSQOxKnxbwM5ieARrcRI3ViZoP0qSIXnCp9sq4XRJBsXQtrgZA47XBvESw"
          />
        </div>
      </div>
    </header>
  )
}
