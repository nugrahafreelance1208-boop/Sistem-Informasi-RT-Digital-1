import { Info3Col, CardHead } from './SuratCardParts'

export function NikahSuratCard({ app, onToast }) {
  return (
    <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col gap-space-sm">
      <CardHead app={app} />
      <Info3Col app={app} />
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-2">
          <button
            className="flex items-center gap-1.5 bg-surface-container-low hover:bg-surface-container text-on-surface px-space-md py-1.5 rounded-lg font-title-sm text-title-sm font-semibold transition-colors"
            type="button"
            onClick={() => onToast(`Mengunduh dokumen final ${app.nomor}...`)}
          >
            <span className="material-symbols-outlined text-base text-secondary">download</span>
            <span>Unduh Dokumen Final</span>
          </button>
          <button
            className="flex items-center gap-1.5 text-on-secondary-fixed-variant bg-secondary-fixed/50 hover:bg-secondary-fixed px-3 py-1.5 rounded-lg font-title-sm text-title-sm font-semibold transition-colors"
            type="button"
            onClick={() => onToast('Membuka riwayat pengiriman WhatsApp...')}
          >
            <span className="material-symbols-outlined text-base">send</span>
            <span>WA Terkirim</span>
          </button>
        </div>
        <span className="font-label-sm text-label-sm text-on-surface-variant">Diunduh 2x oleh Pemohon</span>
      </div>
    </div>
  )
}

export function PindahSuratCard({ app, onToast, onSelect }) {
  return (
    <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col gap-space-sm border-l-4 border-l-error">
      <CardHead app={app} />
      <Info3Col app={app} />
      <div className="flex items-center justify-between pt-1">
        <button
          className="flex items-center gap-1 text-on-error-container font-title-sm text-title-sm font-semibold hover:underline"
          type="button"
          onClick={() => onToast(`Mengirim ulang notifikasi revisi ke ${app.nama}...`)}
        >
          <span className="material-symbols-outlined text-base">forward_to_inbox</span>
          <span>Kirim Ulang Notifikasi Pengingat Revisi</span>
        </button>
        <button
          className="text-on-surface-variant hover:text-on-surface font-title-sm text-title-sm"
          type="button"
          onClick={() => onSelect(app.previewKey)}
        >
          Lihat Berkas Lampiran
        </button>
      </div>
    </div>
  )
}
