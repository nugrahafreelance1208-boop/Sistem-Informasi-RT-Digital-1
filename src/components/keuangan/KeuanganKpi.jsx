import { SaldoKasCard, PenerimaanCard } from './KeuanganKpiA'

export function PengeluaranCard() {
  return (
    <div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
            Total Pengeluaran Bulan Ini
          </span>
          <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-tertiary">
            <span className="material-symbols-outlined text-lg">payments</span>
          </div>
        </div>
        <div className="font-headline-lg text-headline-lg text-on-surface font-code-num tracking-tight">
          Rp 4.250.000
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-medium truncate">
          Kebersihan, Ronda, &amp; Taman
        </span>
        <span className="font-label-sm text-label-sm text-secondary font-semibold shrink-0">3 Pos Biaya</span>
      </div>
    </div>
  )
}

export function TunggakanCard({ onToast }) {
  return (
    <div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
            Tunggakan Iuran Periode Ini
          </span>
          <div className="w-8 h-8 rounded-lg bg-error-container/70 flex items-center justify-center text-on-error-container">
            <span className="material-symbols-outlined text-lg">pending_actions</span>
          </div>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-headline-lg text-headline-lg text-error font-code-num">Rp 700.000</span>
          <span className="font-label-sm text-label-sm text-error font-bold">7 KK</span>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="font-label-sm text-label-sm text-on-surface-variant">Kolektabilitas: 90.5%</span>
        <button
          className="text-error font-label-sm text-label-sm font-semibold hover:underline flex items-center gap-0.5"
          type="button"
          onClick={() => onToast('Membuka daftar 7 KK menunggak periode Oktober 2024...')}
        >
          Lihat Daftar <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>
    </div>
  )
}

export default function KeuanganKpi({ onToast }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md mb-space-lg">
      <SaldoKasCard />
      <PenerimaanCard />
      <PengeluaranCard />
      <TunggakanCard onToast={onToast} />
    </div>
  )
}
