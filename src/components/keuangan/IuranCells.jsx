export function MetodeCell({ row }) {
  if (!row.metode) {
    return <span className="font-label-sm text-label-sm text-outline italic">Belum Ada Tag</span>
  }
  return (
    <>
      <div className="flex items-center gap-1.5">
        <span className={`material-symbols-outlined text-sm ${row.metodeIconColor}`}>{row.metodeIcon}</span>
        <span className="font-label-sm text-label-sm font-semibold text-on-surface">{row.metode}</span>
      </div>
      {row.refLink ? (
        <span className="font-label-sm text-label-sm text-secondary underline cursor-pointer">{row.ref}</span>
      ) : (
        <span className="font-label-sm text-label-sm text-outline font-code-num truncate block max-w-[110px]">
          {row.ref}
        </span>
      )}
    </>
  )
}

export function RowActions({ row, onToast }) {
  if (row.statusKey === 'menunggak') {
    return (
      <div className="flex items-center justify-end gap-1">
        <button
          className="px-2 py-1 rounded bg-secondary-container text-on-secondary-container text-label-sm font-semibold flex items-center gap-1 hover:bg-secondary hover:text-on-secondary transition-colors"
          title="Kirim Tagihan WA"
          type="button"
          onClick={() => onToast(`Mengirim pengingat WA ke ${row.nama}...`)}
        >
          <span className="material-symbols-outlined text-sm">chat</span> Ingatkan
        </button>
        <button
          className="p-1.5 rounded-md hover:bg-surface-container text-primary transition-colors"
          title="Catat Tunai Manual"
          type="button"
          onClick={() => onToast(`Mencatat pembayaran tunai ${row.nama}...`)}
        >
          <span className="material-symbols-outlined text-lg">paid</span>
        </button>
      </div>
    )
  }
  if (row.statusKey === 'verifikasi') {
    return (
      <div className="flex items-center justify-end gap-1">
        <button
          className="px-2 py-1 rounded bg-primary-container text-on-primary text-label-sm font-semibold flex items-center gap-1 hover:bg-secondary transition-colors"
          title="Setujui Pembayaran"
          type="button"
          onClick={() => onToast(`Pembayaran ${row.nama} diverifikasi dan dilunaskan.`)}
        >
          <span className="material-symbols-outlined text-sm">check</span> Verifikasi
        </button>
      </div>
    )
  }
  return (
    <div className="flex items-center justify-end gap-1">
      <button
        className="p-1.5 rounded-md hover:bg-surface-container text-secondary transition-colors"
        title="Kwitansi Digital"
        type="button"
        onClick={() => onToast(`Membuka kwitansi digital ${row.nama}...`)}
      >
        <span className="material-symbols-outlined text-lg">receipt</span>
      </button>
      <button
        className="p-1.5 rounded-md hover:bg-surface-container text-outline transition-colors"
        title="Detail Lengkap"
        type="button"
        onClick={() => onToast(`Membuka detail tagihan ${row.nama}...`)}
      >
        <span className="material-symbols-outlined text-lg">visibility</span>
      </button>
    </div>
  )
}
