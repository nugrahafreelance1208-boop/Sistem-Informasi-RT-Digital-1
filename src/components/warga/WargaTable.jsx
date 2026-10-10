import { StatusTinggalBadge, IuranBadge, VerifBadge } from './WargaBadges'

export default function WargaTable({ rows, masked, selectedKey }) {
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-surface-container-low/60 text-on-surface-variant uppercase font-label-sm text-label-sm">
            <th className="py-3 px-4 font-semibold">Alamat / Blok</th>
            <th className="py-3 px-4 font-semibold">Kepala Keluarga &amp; KK</th>
            <th className="py-3 px-3 font-semibold text-center">Anggota</th>
            <th className="py-3 px-3 font-semibold">Status Tinggal</th>
            <th className="py-3 px-3 font-semibold">Iuran RT</th>
            <th className="py-3 px-3 font-semibold">Verifikasi</th>
            <th className="py-3 px-4 font-semibold text-right">Aksi</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-surface-container text-on-surface font-body-sm text-body-sm">
          {rows.map((k) => (
            <WargaRow key={k.key} data={k} masked={masked} selected={selectedKey === k.key} />
          ))}
          {rows.length === 0 && (
            <tr>
              <td colSpan={7} className="py-10 px-4 text-center text-on-surface-variant font-body-sm text-body-sm">
                Tidak ada data yang cocok dengan filter. Klik ikon reset untuk mengembalikan.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

function WargaRow({ data, masked, selected }) {
  const k = data
  return (
    <tr data-family-key={k.key} className={k.alert ? 'row-alert' : selected ? 'row-selected' : 'row-normal'}>
      <td className="py-3.5 px-4 font-title-sm text-title-sm">
        <div className="flex items-center gap-2">
          <span className={k.alert ? 'w-2 h-2 rounded-full bg-error' : 'w-2 h-2 rounded-full bg-secondary'}></span>
          <div className="flex flex-col">
            <span className="font-bold text-on-surface">{k.blok}</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">{k.jalan}</span>
          </div>
        </div>
      </td>
      <td className="py-3.5 px-4">
        <div className="flex flex-col">
          <span className="font-title-sm text-title-sm font-bold text-on-surface">{k.kepala}</span>
          <span className="font-code-num text-code-num text-on-surface-variant font-medium">
            {masked ? k.nikMasked : k.nikFull}
          </span>
        </div>
      </td>
      <td className="py-3.5 px-3 text-center">
        <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm font-semibold text-on-surface">
          {k.anggota} Jiwa
        </span>
      </td>
      <td className="py-3.5 px-3">
        <StatusTinggalBadge value={k.statusTinggal} />
      </td>
      <td className="py-3.5 px-3">
        <IuranBadge value={k.iuran} />
      </td>
      <td className="py-3.5 px-3">
        <VerifBadge value={k.verifikasi} />
      </td>
      <td className="py-3.5 px-4 text-right">
        <RowActions data={k} />
      </td>
    </tr>
  )
}

function RowActions({ data }) {
  if (data.alert) {
    return (
      <div className="flex items-center justify-end gap-1">
        <button
          className="px-2 py-1 bg-primary-container text-on-primary hover:bg-secondary rounded font-label-sm text-label-sm font-semibold shadow-sm btn-verif"
          type="button"
          data-nama={data.kepala}
        >
          Verifikasi
        </button>
        <button
          className="p-1.5 text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded"
          title="Lihat Detail"
          type="button"
        >
          <span className="material-symbols-outlined text-base">info</span>
        </button>
      </div>
    )
  }
  return (
    <div className="flex items-center justify-end gap-1">
      <button
        className="p-1.5 text-on-surface-variant hover:text-primary-container hover:bg-surface-container rounded btn-view"
        title="Lihat Kartu Keluarga"
        type="button"
        data-nama={data.kepala}
      >
        <span className="material-symbols-outlined text-base">visibility</span>
      </button>
      <button
        className="p-1.5 text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded btn-edit"
        title="Edit Data KK"
        type="button"
        data-nama={data.kepala}
      >
        <span className="material-symbols-outlined text-base">edit</span>
      </button>
    </div>
  )
}
