import { EXPENSE_LIST } from '../../data/mockData'
import { useSupabaseList, SourceBadge } from '../../hooks/useSupabaseList'
import { fetchKas } from '../../lib/supabaseQueries'
import { mapKasToExpense, formatRp } from '../../lib/mappersCore'

export default function ExpenseCard({ onToast, periodeKode = 'okt-2024' }) {
  const q = useSupabaseList(fetchKas, { periodeKode }, null)
  const liveRows = q.live && q.data ? q.data.filter((r) => r.jenis === 'keluar').map(mapKasToExpense) : null
  const list = liveRows ?? EXPENSE_LIST
  const subtotal = liveRows
    ? liveRows.reduce((a, e) => a + Number(String(e.nominal).replace(/[^0-9]/g, '') || 0), 0)
    : 2750000
  return (
    <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4 pb-2 border-b-0">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-error text-xl">output</span>
          <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Realisasi Pengeluaran</h3>
        </div>
        <span className="font-label-sm text-label-sm text-outline font-semibold">Okt 2024</span>
      </div>
      <div className="flex flex-col gap-3">
        <div className="mt-1"><SourceBadge live={q.live} loading={q.loading} /></div>
        {list.map((e) => (
          <div key={e.judul} className="p-3 rounded-lg bg-surface-container-low flex flex-col gap-2">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-2.5">
                <div className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${e.box}`}>
                  <span className="material-symbols-outlined text-base">{e.icon}</span>
                </div>
                <div>
                  <span className="font-title-sm text-title-sm font-bold text-on-surface block leading-tight">{e.judul}</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">{e.desc}</span>
                </div>
              </div>
              <span className="font-code-num text-code-num font-bold text-on-surface">{e.nominal}</span>
            </div>
            <div className="flex items-center justify-between pt-1 font-label-sm text-label-sm">
              <span className="text-outline">{e.meta}</span>
              <button
                className="text-secondary font-semibold hover:underline flex items-center gap-0.5"
                type="button"
                onClick={() => onToast(`Membuka dokumen ${e.doc}...`)}
              >
                <span className="material-symbols-outlined text-xs">attach_file</span> {e.doc}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-3 flex items-center justify-between">
        <span className="font-title-sm text-title-sm font-bold text-on-surface">Subtotal Dibelanjakan</span>
        <span className="font-code-num text-code-num font-bold text-on-surface">{formatRp(subtotal)}</span>
      </div>
      <button
        className="w-full mt-3 py-2 px-3 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-title-sm text-title-sm font-semibold flex items-center justify-center gap-1.5"
        type="button"
        onClick={() => onToast('Membuka Buku Kas Umum Lengkap...')}
      >
        <span className="material-symbols-outlined text-base">receipt_long</span>
        <span>Buka Buku Kas Umum Lengkap</span>
      </button>
    </div>
  )
}
