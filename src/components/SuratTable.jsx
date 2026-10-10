import { SURAT_LIST } from '../data/mockData'

export default function SuratTable({ onReview }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
      <div className="flex items-center justify-between pb-space-sm">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-error text-xl">assignment_late</span>
          <div>
            <h2 className="font-title-md text-title-md text-on-surface font-bold">
              Permohonan Surat Perlu Tindakan Cepat
            </h2>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              5 pengajuan warga memerlukan tanda tangan digital dan validasi domisili
            </span>
          </div>
        </div>
        <a
          className="font-title-sm text-title-sm text-secondary hover:text-primary transition-colors hidden sm:flex items-center gap-1 font-semibold"
          href="#"
          onClick={(e) => e.preventDefault()}
        >
          <span>Lihat Semua (38)</span>
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </a>
      </div>

      <div className="overflow-x-auto mt-space-sm">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-surface-container-low text-on-surface-variant">
              <th className="py-2.5 px-3 rounded-l-lg font-label-sm text-label-sm uppercase tracking-wider">
                Pemohon / NIK
              </th>
              <th className="py-2.5 px-3 font-label-sm text-label-sm uppercase tracking-wider">Jenis Surat</th>
              <th className="py-2.5 px-3 font-label-sm text-label-sm uppercase tracking-wider">Kavling / Blok</th>
              <th className="py-2.5 px-3 font-label-sm text-label-sm uppercase tracking-wider">Waktu Masuk</th>
              <th className="py-2.5 px-3 font-label-sm text-label-sm uppercase tracking-wider">Status</th>
              <th className="py-2.5 px-3 rounded-r-lg font-label-sm text-label-sm uppercase tracking-wider text-right">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {SURAT_LIST.map((s) => (
              <tr key={s.id} className="hover:bg-surface-container-low transition-colors group">
                <td className="py-3 px-3">
                  <div className="flex items-center gap-2.5">
                    <img className="w-8 h-8 rounded-full object-cover shadow-sm" alt={s.nama} src={s.avatar} />
                    <div className="flex flex-col">
                      <span className="font-title-sm text-title-sm text-on-surface font-semibold">{s.nama}</span>
                      <span className="font-code-num text-body-sm text-on-surface-variant">{s.nik}</span>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-3">
                  <div className="flex flex-col">
                    <span className="font-title-sm text-title-sm text-on-surface">{s.jenis}</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">{s.keperluan}</span>
                  </div>
                </td>
                <td className="py-3 px-3">
                  <span className="font-body-md text-body-md text-on-surface font-medium">{s.blok}</span>
                </td>
                <td className="py-3 px-3">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">{s.waktu}</span>
                </td>
                <td className="py-3 px-3">
                  <span
                    className={`${s.statusStyle} px-2 py-0.5 rounded-full font-label-sm text-label-sm inline-flex items-center gap-1 font-medium`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${s.dotStyle}`}></span>
                    {s.status}
                  </span>
                </td>
                <td className="py-3 px-3 text-right">
                  <div className="flex items-center justify-end gap-1.5">
                    <button
                      className="bg-primary-container text-on-primary hover:bg-secondary px-2.5 py-1.5 rounded-lg font-title-sm text-title-sm font-semibold transition-colors shadow-sm flex items-center gap-1"
                      type="button"
                      onClick={() => onReview(s)}
                    >
                      <span className="material-symbols-outlined text-base">draw</span>
                      <span>Review &amp; TTD</span>
                    </button>
                    <button
                      className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-base">visibility</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
