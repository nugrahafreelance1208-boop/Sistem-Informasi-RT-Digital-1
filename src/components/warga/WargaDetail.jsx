import WargaDetailInfo from './WargaDetailInfo'

export default function WargaDetail({ family, onToast }) {
  if (!family) return null

  return (
    <div className="lg:col-span-4 flex flex-col gap-4">
      <div className="bg-surface-container-lowest rounded-xl shadow-sm p-5 flex flex-col gap-4">
        <WargaDetailInfo family={family} />

        <div className="flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-label-sm text-on-surface font-bold uppercase tracking-wider">
              Anggota Keluarga Terdaftar ({family.anggota} Jiwa)
            </span>
            <button
              className="font-label-sm text-label-sm text-primary-container hover:text-secondary font-semibold"
              type="button"
              onClick={() => onToast(`Menambah anggota ke ${family.kepala}...`)}
            >
              + Tambah
            </button>
          </div>
          {family.members.map((m) => (
            <div
              key={m.nama}
              className="p-2.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container-low transition-colors flex items-center justify-between shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div
                  className={
                    m.primary
                      ? 'w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-xs'
                      : 'w-8 h-8 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center font-bold text-xs'
                  }
                >
                  {m.initials}
                </div>
                <div className="flex flex-col">
                  <span className="font-title-sm text-title-sm text-on-surface font-bold leading-tight">{m.nama}</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">{m.meta}</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-secondary text-base">verified</span>
            </div>
          ))}
        </div>

        <div className="pt-2 flex flex-col gap-2">
          <button
            className="w-full flex items-center justify-center gap-2 bg-primary-container hover:bg-secondary text-on-primary font-title-sm text-title-sm font-semibold py-2 rounded shadow-sm transition-all"
            type="button"
            onClick={() => onToast(`Mencetak surat pengantar untuk ${family.kepala}...`)}
          >
            <span className="material-symbols-outlined text-lg">print</span>
            <span>Cetak Surat Pengantar Cepat</span>
          </button>
          <div className="grid grid-cols-2 gap-2">
            <button
              className="flex items-center justify-center gap-1.5 bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md font-semibold py-2 rounded transition-colors"
              type="button"
              onClick={() => onToast(`Memproses mutasi ${family.kepala}...`)}
            >
              <span className="material-symbols-outlined text-base">move_down</span>
              <span>Proses Mutasi</span>
            </button>
            <button
              className="flex items-center justify-center gap-1.5 bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md font-semibold py-2 rounded transition-colors"
              type="button"
              onClick={() => onToast(`Membuka histori surat ${family.kepala}...`)}
            >
              <span className="material-symbols-outlined text-base">history_edu</span>
              <span>Histori Surat</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-primary-container text-on-primary p-4 rounded-xl shadow-sm flex items-start gap-3 relative overflow-hidden">
        <span className="material-symbols-outlined text-2xl text-secondary-fixed">shield_lock</span>
        <div className="flex flex-col font-body-sm text-body-sm">
          <span className="font-title-sm text-title-sm font-bold text-on-primary">Keamanan Data Kependudukan</span>
          <p className="text-on-primary-container mt-0.5">
            Setiap NIK dan Dokumen KK tersimpan dengan enkripsi TLS 1.3 sesuai Pedoman Perlindungan Data Pribadi
            (UU PDP). Akses pembukaan masker NIK dicatat dalam audit trail sistem.
          </p>
        </div>
      </div>
    </div>
  )
}
