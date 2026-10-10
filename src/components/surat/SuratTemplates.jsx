import { SURAT_TEMPLATES } from '../../data/mockData'

export default function SuratTemplates({ onToast }) {
  return (
    <div className="flex flex-col gap-space-md pt-space-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
        <div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface tracking-tight font-bold">Katalog Template Surat Aktif</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">Format baku resmi yang telah disesuaikan dengan regulasi Kelurahan &amp; Kecamatan tahun 2024.</p>
        </div>
        <button
          className="flex items-center gap-1.5 text-secondary hover:underline font-title-sm text-title-sm font-semibold self-start sm:self-auto"
          type="button"
          onClick={() => onToast('Membuka semua 14 template surat...')}
        >
          <span>Lihat Semua 14 Template</span>
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-md">
        {SURAT_TEMPLATES.map((t) => (
          <div key={t.nama} className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-3 group">
            <div className="flex flex-col gap-2">
              <div className={t.highlight ? 'w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center group-hover:bg-secondary group-hover:text-on-secondary transition-colors' : 'w-10 h-10 rounded-xl bg-surface-container text-on-surface flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors'}>
                <span className="material-symbols-outlined text-2xl">{t.icon}</span>
              </div>
              <span className="font-title-sm text-title-sm font-bold text-on-surface">{t.nama}</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">{t.desc}</p>
            </div>
            <div className="flex items-center justify-between pt-2 border-t">
              <span className="font-code-num text-xs text-on-surface-variant">{t.dipakai}</span>
              <button
                className="text-secondary font-title-sm text-title-sm font-bold hover:underline flex items-center"
                type="button"
                onClick={() => onToast(`Membuat surat baru dari template "${t.nama}"...`)}
              >
                <span>Pakai</span>
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
