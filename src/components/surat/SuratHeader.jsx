export default function SuratHeader({ onToast }) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md pb-space-sm">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            Modul Administrasi Wilayah
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant font-code-num">KODE: RT04-REG-2024</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
          Layanan Persuratan &amp; Rekomendasi RT Digital
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
          Penerbitan surat pengantar resmi ber-QR Code validasi, tracking alur pengajuan mandiri warga, dan arsip
          dokumen terintegrasi.
        </p>
      </div>
      <div className="flex items-center gap-space-sm flex-wrap">
        <button
          className="flex items-center gap-2 bg-surface-container hover:bg-surface-container-high text-on-surface px-space-md py-2.5 rounded-xl font-title-sm text-title-sm font-semibold shadow-sm transition-all duration-200"
          type="button"
          onClick={() => onToast('Membuka Kelola Template & Penomoran surat...')}
        >
          <span className="material-symbols-outlined text-lg text-on-surface-variant">tune</span>
          <span>Kelola Template &amp; Penomoran</span>
        </button>
        <button
          className="flex items-center gap-2 bg-primary-container hover:bg-secondary text-on-primary px-space-lg py-2.5 rounded-xl font-title-sm text-title-sm font-semibold shadow-md transition-all duration-200"
          type="button"
          onClick={() => onToast('Membuka form Terbitkan Surat Baru (Manual/Walk-in)...')}
        >
          <span className="material-symbols-outlined text-lg">add_circle</span>
          <span>+ Terbitkan Surat Baru (Manual/Walk-in)</span>
        </button>
      </div>
    </div>
  )
}
