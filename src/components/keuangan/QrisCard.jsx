export default function QrisCard({ onToast }) {
  return (
    <div className="bg-primary-container text-on-primary rounded-xl p-5 shadow-sm relative overflow-hidden flex flex-col justify-between">
      <div className="flex items-start justify-between relative z-10 mb-3">
        <div>
          <span className="font-label-sm text-label-sm text-on-primary-container uppercase tracking-wider font-bold">
            QRIS Standee Warga
          </span>
          <h4 className="font-title-md text-title-md font-bold text-on-primary">Pembayaran Mandiri Cepat</h4>
        </div>
        <span className="material-symbols-outlined text-secondary-fixed text-2xl">qr_code_scanner</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-primary-container relative z-10 mb-4">
        Warga dapat scan langsung dari Pos Ronda atau mobile app SIP-RT warga tanpa menunggu tagihan fisik.
      </p>
      <button
        className="w-full py-2 px-3 rounded-lg bg-secondary text-on-secondary hover:bg-secondary-container hover:text-on-secondary-container transition-colors font-title-sm text-title-sm font-bold flex items-center justify-center gap-2 relative z-10 shadow-sm"
        type="button"
        onClick={() => onToast('Mengunduh template barcode QRIS RT 04...')}
      >
        <span className="material-symbols-outlined text-base">download</span>
        <span>Unduh Template Barcode RT 04</span>
      </button>
    </div>
  )
}
