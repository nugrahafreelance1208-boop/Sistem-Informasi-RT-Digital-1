import { KEUANGAN_TABS } from '../../data/mockData'

export default function KeuanganTabs({ active, onChange, onToast }) {
  return (
    <div className="flex items-center gap-2 bg-surface-container-low p-1 rounded-xl mb-space-md overflow-x-auto shadow-sm">
      {KEUANGAN_TABS.map((t) => {
        const isActive = t.key === active
        return (
          <button
            key={t.key}
            type="button"
            onClick={() => {
              onChange(t.key)
              if (t.key !== 'tagihan') onToast(`Tab "${t.label}" segera hadir — saat ini menampilkan Tagihan & Iuran Warga.`)
            }}
            className={
              isActive
                ? 'flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-lowest text-primary-container font-title-sm text-title-sm font-bold shadow-sm whitespace-nowrap'
                : 'flex items-center gap-2 px-4 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors font-title-sm text-title-sm whitespace-nowrap'
            }
          >
            <span className="material-symbols-outlined text-lg">{t.icon}</span>
            <span>{t.label}</span>
            {t.badge && (
              <span className="px-2 py-0.2 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm ml-1">
                {t.badge}
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}
