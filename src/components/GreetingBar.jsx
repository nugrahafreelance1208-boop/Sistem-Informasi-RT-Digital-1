import useClock from '../hooks/useClock'

export default function GreetingBar({ onExport }) {
  const clock = useClock()

  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md py-space-lg">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-space-sm flex-wrap">
          <span className="bg-secondary-container text-on-secondary-container px-2.5 py-0.5 rounded-full font-label-sm text-label-sm font-semibold tracking-wide flex items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            Periode Kepengurusan: 2024 - 2027
          </span>
          <span className="bg-surface-container text-on-surface-variant px-2.5 py-0.5 rounded-full font-label-sm text-label-sm flex items-center gap-1">
            <span className="material-symbols-outlined text-sm text-secondary">schedule</span>
            <span>{clock}</span>
          </span>
        </div>
        <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">
          Selamat Datang, Bpk. Bambang Sudiro
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Rangkuman operasional, tata kelola kependudukan, dan arus kas RT 04 / RW 08 Sukamaju terdata
          mutakhir.
        </p>
      </div>
      <div className="flex items-center gap-space-sm self-start lg:self-auto">
        <button
          className="flex items-center gap-2 bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-all px-space-md py-2 rounded-xl shadow-sm"
          type="button"
        >
          <span className="material-symbols-outlined text-lg text-secondary">tune</span>
          <span className="font-title-sm text-title-sm">Filter Bulan</span>
        </button>
        <button
          className="flex items-center gap-2 bg-primary-container text-on-primary hover:bg-secondary transition-all px-space-md py-2 rounded-xl shadow-sm"
          type="button"
          onClick={onExport}
        >
          <span className="material-symbols-outlined text-lg">download</span>
          <span className="font-title-sm text-title-sm">Unduh Rekap Bulanan (PDF/Excel)</span>
        </button>
      </div>
    </div>
  )
}
