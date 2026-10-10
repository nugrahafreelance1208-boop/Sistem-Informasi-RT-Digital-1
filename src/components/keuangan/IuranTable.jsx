import { IuranStatusBadge } from './IuranBadges'
import { MetodeCell, RowActions } from './IuranCells'

export default function IuranTable({ rows, onToast }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
            <th className="py-3 px-4 font-semibold">KK / Nama Warga</th>
            <th className="py-3 px-4 font-semibold">Unit Rumah</th>
            <th className="py-3 px-4 font-semibold">Rincian Komponen</th>
            <th className="py-3 px-4 font-semibold">Metode / Ref</th>
            <th className="py-3 px-4 font-semibold">Status</th>
            <th className="py-3 px-4 font-semibold text-right">Aksi</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-surface-container font-body-sm text-body-sm text-on-surface">
          {rows.map((r) => (
            <tr key={r.key} className={`hover:bg-surface-container-low/50 transition-colors ${r.alert ? 'bg-error-container/10' : ''}`}>
              <td className="py-3 px-4">
                <div className="flex items-center gap-3">
                  <div className={avatarClass(r)}>
                    {r.initials}
                  </div>
                  <div>
                    <span className="font-title-sm text-title-sm font-bold text-on-surface block leading-tight">{r.nama}</span>
                    <span className="font-label-sm text-label-sm text-outline font-code-num">NIK: {r.nik}</span>
                  </div>
                </div>
              </td>
              <td className="py-3 px-4">
                <span className="font-title-sm text-title-sm font-semibold text-on-surface">{r.blok}</span>
                <span className="block font-label-sm text-label-sm text-outline">{r.gang}</span>
              </td>
              <td className="py-3 px-4">
                <div className="flex flex-col gap-0.5">
                  <span className={`font-code-num text-code-num font-bold ${r.alert ? 'text-error' : 'text-on-surface'}`}>{r.nominal}</span>
                  <span className="text-xs text-on-surface-variant">{r.rincian}</span>
                </div>
              </td>
              <td className="py-3 px-4">
                <MetodeCell row={r} />
              </td>
              <td className="py-3 px-4">
                <IuranStatusBadge status={r.status} />
                <span className={`block font-label-sm text-label-sm mt-0.5 ${r.alert ? 'text-error' : 'text-outline'}`}>{r.statusTime}</span>
              </td>
              <td className="py-3 px-4 text-right">
                <RowActions row={r} onToast={onToast} />
              </td>
            </tr>
          ))}
          {rows.length === 0 && (
            <tr>
              <td colSpan={6} className="py-10 px-4 text-center text-on-surface-variant font-body-sm text-body-sm">
                Tidak ada tagihan yang cocok dengan filter.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

function avatarClass(r) {
  const base = 'w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs '
  if (r.alert) return base + 'bg-error-container text-on-error-container'
  if (r.statusKey === 'verifikasi') return base + 'bg-tertiary-fixed text-on-tertiary-fixed'
  return base + 'bg-secondary-container/60 text-on-secondary-container'
}
