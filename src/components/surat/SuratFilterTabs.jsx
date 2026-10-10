import { SURAT_FILTER_TABS } from '../../data/mockData'

export default function SuratFilterTabs({ active, onChange }) {
  return (
    <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {SURAT_FILTER_TABS.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => onChange(t.key)}
              className={
                t.key === active
                  ? 'px-3.5 py-1.5 rounded-full bg-primary-container text-on-primary font-title-sm text-title-sm font-semibold whitespace-nowrap shadow-sm'
                  : 'px-3.5 py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-title-sm text-title-sm whitespace-nowrap transition-colors'
              }
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm self-end sm:self-auto">
          <span>Urutkan:</span>
          <span className="font-semibold text-on-surface cursor-pointer">Terbaru ↓</span>
        </div>
      </div>
    </div>
  )
}
