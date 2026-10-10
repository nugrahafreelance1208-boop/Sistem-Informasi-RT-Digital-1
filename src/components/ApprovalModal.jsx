import { useState } from 'react'

export default function ApprovalModal({ data, onClose }) {
  const [signing, setSigning] = useState(false)

  if (!data) return null

  const handleSign = () => {
    setSigning(true)
    setTimeout(() => {
      setSigning(false)
      onClose(true)
    }, 700)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/45" onClick={() => onClose(false)}>
      <div
        className="bg-surface-container-lowest rounded-xl max-w-lg w-full p-space-lg shadow-xl relative modal-pop"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-space-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">verified_user</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Validasi &amp; Tanda Tangan Digital RT
              </h3>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                SIP-RT Digital Signature v2.4
              </span>
            </div>
          </div>
          <button
            className="p-1 rounded-lg text-on-surface-variant hover:bg-surface-container"
            type="button"
            onClick={() => onClose(false)}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="p-space-md bg-surface-container-low rounded-xl my-space-md space-y-2">
          <div className="flex justify-between font-body-sm text-body-sm">
            <span className="text-on-surface-variant">Nama Pemohon:</span>
            <span className="text-on-surface font-bold">{data.nama}</span>
          </div>
          <div className="flex justify-between font-body-sm text-body-sm gap-4">
            <span className="text-on-surface-variant shrink-0">Jenis Surat:</span>
            <span className="text-on-surface font-semibold text-right">{data.jenis}</span>
          </div>
          <div className="flex justify-between font-body-sm text-body-sm">
            <span className="text-on-surface-variant">Status Iuran Terakhir:</span>
            <span className="text-secondary font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">verified</span> Lunas s/d Oktober 2024
            </span>
          </div>
        </div>

        <div className="p-3 bg-secondary-container/40 rounded-lg text-on-secondary-container font-body-sm text-body-sm mb-space-md flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary">security</span>
          <span>
            Dokumen akan otomatis di-generate dengan QR-Code tersertifikasi untuk diteruskan ke Ketua RW 08.
          </span>
        </div>

        <div className="flex items-center justify-end gap-space-sm">
          <button
            className="px-space-md py-2 rounded-xl text-on-surface font-title-sm text-title-sm hover:bg-surface-container transition-colors"
            type="button"
            onClick={() => onClose(false)}
          >
            Batal
          </button>
          <button
            className="bg-primary-container text-on-primary hover:bg-secondary px-space-md py-2 rounded-xl font-title-sm text-title-sm font-semibold transition-colors flex items-center gap-1.5 shadow-sm disabled:opacity-70"
            type="button"
            onClick={handleSign}
            disabled={signing}
          >
            <span className={`material-symbols-outlined text-base ${signing ? 'animate-spin' : ''}`}>
              {signing ? 'refresh' : 'check'}
            </span>
            <span>{signing ? 'Memproses...' : 'Sahkan Surat Digital'}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
