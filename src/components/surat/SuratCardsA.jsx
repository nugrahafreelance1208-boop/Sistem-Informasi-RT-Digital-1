import { Info3Col, CardHead } from './SuratCardParts'

export function SelectedSuratCard({ app, onToast, onSelect }) {
  return (
    <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-md transition-all duration-200 ring-2 ring-primary relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"></div>
      <div className="flex flex-col gap-space-sm pl-1.5">
        <CardHead app={app} selected />
        <Info3Col app={app} />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-space-xs">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              className="w-full sm:w-auto flex items-center justify-center gap-1.5 bg-primary hover:bg-primary-container text-on-primary px-space-md py-2 rounded-xl font-title-sm text-title-sm font-bold shadow-sm transition-colors"
              type="button"
              onClick={() => onToast(`Surat ${app.nomor} disetujui & TTD digital diterbitkan!`)}
            >
              <span className="material-symbols-outlined text-base">draw</span>
              <span>Setujui &amp; Terbitkan TTD</span>
            </button>
            <button
              className="w-full sm:w-auto flex items-center justify-center gap-1 bg-error-container hover:bg-error/20 text-on-error-container px-3 py-2 rounded-xl font-title-sm text-title-sm font-semibold transition-colors"
              type="button"
              onClick={() => onToast(`Meminta perbaikan berkas kepada ${app.nama}...`)}
            >
              <span className="material-symbols-outlined text-base">edit_note</span>
              <span>Minta Perbaikan</span>
            </button>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              className="font-label-sm text-label-sm text-primary font-semibold flex items-center gap-1"
              type="button"
              onClick={() => onSelect(app.previewKey)}
            >
              <span className="material-symbols-outlined text-sm">visibility</span>
              <span>Tampil di Preview</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function DomisiliSuratCard({ app, onToast, onSelect }) {
  return (
    <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col gap-space-sm">
      <CardHead app={app} />
      <Info3Col app={app} />
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-2">
          <button
            className="flex items-center gap-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface px-space-md py-1.5 rounded-lg font-title-sm text-title-sm font-semibold transition-colors"
            type="button"
            onClick={() => onToast(`Membuka 3 berkas lampiran ${app.nama}...`)}
          >
            <span className="material-symbols-outlined text-base text-secondary">attachment</span>
            <span>Periksa Lampiran (3 Berkas)</span>
          </button>
          <button
            className="flex items-center gap-1 text-on-surface-variant hover:text-on-surface px-2.5 py-1.5 rounded-lg font-title-sm text-title-sm transition-colors"
            type="button"
            onClick={() => onToast(`Menghubungi ${app.nama} via WhatsApp...`)}
          >
            <span className="material-symbols-outlined text-base">chat</span>
            <span>Hubungi Pemohon</span>
          </button>
        </div>
        <button
          className="text-on-surface-variant hover:text-primary font-label-sm text-label-sm font-semibold"
          type="button"
          onClick={() => onSelect(app.previewKey)}
        >
          Lihat Rincian →
        </button>
      </div>
    </div>
  )
}
