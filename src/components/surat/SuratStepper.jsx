import { SURAT_WORKFLOW } from '../../data/mockData'

function StepCard({ step }) {
  if (step.variant === 'ketua') {
    return (
      <div className="bg-primary-container text-on-primary p-space-sm rounded-xl flex flex-col gap-1.5 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container font-code-num text-xs flex items-center justify-center font-bold">{step.no}</span>
          <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-bold">{step.count}</span>
        </div>
        <span className="font-title-sm text-title-sm text-on-primary font-semibold">{step.title}</span>
        <span className="font-body-sm text-body-sm text-on-primary-container">{step.desc}</span>
      </div>
    )
  }

  const numClass =
    step.variant === 'tertiary'
      ? 'w-6 h-6 rounded-full bg-tertiary text-on-tertiary font-code-num text-xs flex items-center justify-center font-bold'
      : step.variant === 'sekretaris'
        ? 'w-6 h-6 rounded-full bg-secondary-fixed text-on-secondary-fixed font-code-num text-xs flex items-center justify-center font-bold'
        : step.variant === 'selesai'
          ? 'w-6 h-6 rounded-full bg-secondary text-on-secondary font-code-num text-xs flex items-center justify-center font-bold'
          : 'w-6 h-6 rounded-full bg-surface-container-highest text-on-surface-variant font-code-num text-xs flex items-center justify-center font-bold'

  const countClass =
    step.variant === 'tertiary'
      ? 'font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-tertiary text-on-tertiary font-bold'
      : step.variant === 'sekretaris'
        ? 'font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-bold'
        : step.variant === 'selesai'
          ? 'font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-bold'
          : 'font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-bold'

  const cardClass =
    step.variant === 'tertiary'
      ? 'bg-surface-container-low hover:bg-surface-container transition-colors p-space-sm rounded-xl flex flex-col gap-1.5 ring-1 ring-tertiary-fixed'
      : step.variant === 'muted'
        ? 'bg-surface-container-low/60 hover:bg-surface-container-low transition-colors p-space-sm rounded-xl flex flex-col gap-1.5'
        : 'bg-surface-container-low hover:bg-surface-container transition-colors p-space-sm rounded-xl flex flex-col gap-1.5'

  return (
    <div className={cardClass}>
      <div className="flex items-center justify-between">
        <span className={numClass}>{step.no}</span>
        <span className={countClass}>{step.count}</span>
      </div>
      <span className="font-title-sm text-title-sm text-on-surface font-semibold">{step.title}</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">{step.desc}</span>
    </div>
  )
}

export default function SuratStepper() {
  return (
    <div className="bg-surface-container-lowest p-space-md lg:p-space-lg rounded-2xl shadow-sm">
      <div className="flex items-center justify-between pb-space-sm">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary text-xl">route</span>
          <span className="font-title-sm text-title-sm font-bold text-on-surface uppercase tracking-wider">
            Alur Persetujuan &amp; Siklus Pelayanan
          </span>
        </div>
        <span className="font-label-sm text-label-sm text-on-surface-variant">
          Rata-rata waktu terbit: <strong className="text-secondary font-code-num">2 Jam 15 Menit</strong>
        </span>
      </div>
      <div className="relative mt-2">
        <div className="hidden md:block absolute top-1/2 left-8 right-8 -translate-y-1/2 h-1 bg-surface-container-high rounded-full -z-0">
          <div className="h-full bg-secondary rounded-full" style={{ width: '82%' }}></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 relative z-10">
          {SURAT_WORKFLOW.map((s) => (
            <StepCard key={s.no} step={s} />
          ))}
        </div>
      </div>
    </div>
  )
}
