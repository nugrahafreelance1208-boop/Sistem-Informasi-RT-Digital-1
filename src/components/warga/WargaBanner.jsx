export default function WargaBanner({ onToast }) {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 py-6 border-b border-surface-container">
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
            Direktori Kependudukan
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
          <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
            Sistem Registrasi Warga Terpadu
          </span>
        </div>
        <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">
          Data Kependudukan &amp; Kepala Keluarga
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant mt-0.5 max-w-3xl">
          Kelola direktori warga, entitas keluarga/KK, validasi NIK terenkripsi/masking, serta proses
          permohonan mutasi domisili RT 04 / RW 08.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2.5">
        <button
          className="flex items-center gap-2 bg-surface-container-low hover:bg-surface-container text-on-surface font-title-sm text-title-sm px-3.5 py-2 rounded shadow-sm transition-all duration-150"
          type="button"
          onClick={() => onToast('Membuka dialog import CSV / XLS data kependudukan...')}
        >
          <span className="material-symbols-outlined text-lg text-on-surface-variant">upload_file</span>
          <span>Import CSV / XLS</span>
          <span className="material-symbols-outlined text-base text-on-surface-variant">expand_more</span>
        </button>
        <button
          className="flex items-center gap-2 bg-surface-container-low hover:bg-surface-container text-on-surface font-title-sm text-title-sm px-3.5 py-2 rounded shadow-sm transition-all duration-150"
          type="button"
          onClick={() => onToast('Mengekspor Data Master Kependudukan RT 04 / RW 08...')}
        >
          <span className="material-symbols-outlined text-lg text-on-surface-variant">download</span>
          <span>Export Data Master</span>
        </button>
        <button
          className="flex items-center gap-2 bg-primary-container hover:bg-secondary text-on-primary font-title-sm text-title-sm font-semibold px-4 py-2 rounded shadow-sm transition-all duration-150"
          type="button"
          onClick={() => onToast('Membuka form Tambah Anggota / KK Baru...')}
        >
          <span className="material-symbols-outlined text-lg">person_add</span>
          <span>+ Tambah Anggota / KK Baru</span>
        </button>
      </div>
    </div>
  )
}
