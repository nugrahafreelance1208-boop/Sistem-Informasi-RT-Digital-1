import { PERIODE_OPTIONS, IURAN_STATUS_OPTIONS, METODE_OPTIONS } from '../../data/mockData'

export default function KeuanganToolbar({ periode, onPeriode, status, onStatus, metode, onMetode, onToast }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm mb-space-md flex flex-col lg:flex-row lg:items-center justify-between gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-lg">
          <span className="material-symbols-outlined text-outline text-lg">calendar_today</span>
          <label className="sr-only" htmlFor="filter-periode">Pilih Periode</label>
          <select
            id="filter-periode"
            value={periode}
            onChange={(e) => onPeriode(e.target.value)}
            className="bg-transparent font-title-sm text-title-sm text-on-surface font-semibold focus:outline-none cursor-pointer"
          >
            {PERIODE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-lg">
          <span className="material-symbols-outlined text-outline text-lg">filter_alt</span>
          <label className="sr-only" htmlFor="filter-status">Status Iuran</label>
          <select
            id="filter-status"
            value={status}
            onChange={(e) => onStatus(e.target.value)}
            className="bg-transparent font-body-sm text-body-sm text-on-surface focus:outline-none cursor-pointer"
          >
            {IURAN_STATUS_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-lg">
          <span className="material-symbols-outlined text-outline text-lg">credit_card</span>
          <label className="sr-only" htmlFor="filter-metode">Metode Pembayaran</label>
          <select
            id="filter-metode"
            value={metode}
            onChange={(e) => onMetode(e.target.value)}
            className="bg-transparent font-body-sm text-body-sm text-on-surface focus:outline-none cursor-pointer"
          >
            {METODE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg bg-secondary text-on-secondary hover:bg-secondary-container hover:text-on-secondary-container transition-all shadow-sm font-semibold text-title-sm"
          type="button"
          onClick={() => onToast('Pengingat WhatsApp berhasil dikirimkan serentak ke 7 KK menunggak via Gateway Komunikasi RT.')}
        >
          <span className="material-symbols-outlined text-lg">send</span>
          <span>Kirim Pengingat WA Massal (7 KK)</span>
        </button>
        <button
          className="p-2 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors"
          title="Unduh Rekap Spreadsheet"
          type="button"
          onClick={() => onToast('Mengunduh rekap iuran spreadsheet Oktober 2024...')}
        >
          <span className="material-symbols-outlined text-lg">download</span>
        </button>
        <button
          className="p-2 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors"
          title="Cetak Rekap Bulanan"
          type="button"
          onClick={() => onToast('Menyiapkan cetakan rekap bulanan Oktober 2024...')}
        >
          <span className="material-symbols-outlined text-lg">print</span>
        </button>
      </div>
    </div>
  )
}
