import { AGENDA_LIST } from '../data/mockData'

export default function AgendaCard() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
      <div className="flex items-center justify-between pb-space-sm">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary text-xl">event_upcoming</span>
          <h2 className="font-title-md text-title-md text-on-surface font-bold">Agenda &amp; Jadwal Ronda</h2>
        </div>
        <button
          className="p-1 rounded-lg text-secondary hover:bg-surface-container transition-colors"
          type="button"
        >
          <span className="material-symbols-outlined text-lg">add_circle</span>
        </button>
      </div>
      <div className="space-y-space-sm mt-space-xs">
        {AGENDA_LIST.map((a) =>
          a.highlight ? (
            <div
              key={a.id}
              className="p-space-sm bg-primary-container text-on-primary rounded-xl flex items-start gap-space-sm shadow-sm relative overflow-hidden"
            >
              <div className="w-10 h-10 rounded-lg bg-on-primary/10 flex flex-col items-center justify-center shrink-0">
                <span className="font-label-sm text-[10px] uppercase font-bold text-secondary-container">
                  {a.dayLabel}
                </span>
                <span className="font-title-sm text-title-sm font-extrabold leading-tight">{a.dayValue}</span>
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-title-sm text-title-sm font-bold truncate">{a.title}</span>
                  <span className="bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full font-label-sm text-[11px] font-bold">
                    {a.time}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-primary-container mt-0.5">{a.desc}</p>
              </div>
            </div>
          ) : (
            <div
              key={a.id}
              className="p-space-sm bg-surface-container-low rounded-xl flex items-start gap-space-sm hover:bg-surface-container transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-surface-container flex flex-col items-center justify-center shrink-0 text-on-surface">
                <span className="font-label-sm text-[10px] uppercase font-bold text-secondary">{a.dayLabel}</span>
                <span className="font-title-sm text-title-sm font-extrabold leading-tight">{a.dayValue}</span>
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-title-sm text-title-sm text-on-surface font-bold truncate">{a.title}</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">{a.time}</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{a.desc}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}
