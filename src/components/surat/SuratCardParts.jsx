import { SuratStatusPill } from './SuratPills'

export function Info3Col({ app }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm py-1">
      <div>
        <span className="font-label-sm text-label-sm text-on-surface-variant block">Nama Pemohon</span>
        <span className="font-title-sm text-title-sm text-on-surface font-bold">{app.nama}</span>
        <span className="font-body-sm text-body-sm text-on-surface-variant block">{app.kavling}</span>
      </div>
      <div>
        <span className="font-label-sm text-label-sm text-on-surface-variant block">{app.keperluanLabel}</span>
        <span className={app.keperluanError ? 'font-body-md text-body-md text-error font-medium' : 'font-body-md text-body-md text-on-surface font-medium'}>
          {app.keperluan}
        </span>
        <span className={app.keperluanSubAccent ? 'font-body-sm text-body-sm text-secondary font-semibold block' : 'font-body-sm text-body-sm text-on-surface-variant block'}>
          {app.keperluanSub}
        </span>
      </div>
      <div>
        <span className="font-label-sm text-label-sm text-on-surface-variant block">{app.berkasLabel}</span>
        {app.berkasOk ? (
          <div className="flex items-center gap-1.5 text-secondary font-title-sm text-title-sm font-semibold mt-0.5">
            <span className="material-symbols-outlined text-base">verified</span>
            <span>{app.berkasText}</span>
          </div>
        ) : (
          <span className="font-body-sm text-body-sm text-on-surface">{app.berkasText}</span>
        )}
        {app.berkasExtra && (
          <span className="font-label-sm text-label-sm text-on-surface-variant block">{app.berkasExtra}</span>
        )}
        {app.diajukan && (
          <span className="font-label-sm text-label-sm text-on-surface-variant block">{app.diajukan}</span>
        )}
      </div>
    </div>
  )
}

export function CardHead({ app, selected }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-1">
      <div className="flex items-center gap-2">
        <span className={selected ? 'px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold tracking-wider' : 'px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold tracking-wider'}>
          {app.kategori}
        </span>
        <span className={selected ? 'font-code-num text-body-sm font-semibold text-primary' : 'font-code-num text-body-sm font-semibold text-on-surface-variant'}>
          {app.nomor}
        </span>
      </div>
      <SuratStatusPill variant={app.statusVariant} text={app.statusText} />
    </div>
  )
}
