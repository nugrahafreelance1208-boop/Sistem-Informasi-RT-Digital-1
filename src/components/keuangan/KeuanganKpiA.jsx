export function SaldoKasCard() {
  return (
    <div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden">
      <div className="absolute -right-4 -bottom-4 w-28 h-28 bg-primary-fixed/30 rounded-full blur-2xl pointer-events-none"></div>
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
            Saldo Kas Utama Terkonsolidasi
          </span>
          <div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary-container">
            <span className="material-symbols-outlined text-lg">account_balance</span>
          </div>
        </div>
        <div className="font-headline-lg text-headline-lg text-on-surface font-code-num tracking-tight">
          Rp 48.650.000
        </div>
      </div>
      <div className="mt-4 pt-3 flex flex-col gap-1.5 bg-surface-container-low/70 -mx-5 -mb-5 px-5 py-3">
        <div className="flex items-center justify-between font-label-sm text-label-sm">
          <span className="flex items-center gap-1 text-on-surface-variant">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Mandiri Virtual Acc
          </span>
          <span className="font-code-num text-code-num text-on-surface font-semibold">Rp 42.150.000</span>
        </div>
        <div className="flex items-center justify-between font-label-sm text-label-sm">
          <span className="flex items-center gap-1 text-on-surface-variant">
            <span className="w-1.5 h-1.5 rounded-full bg-outline"></span> Kas Tunai Bendahara
          </span>
          <span className="font-code-num text-code-num text-on-surface font-semibold">Rp 6.500.000</span>
        </div>
      </div>
    </div>
  )
}

export function PenerimaanCard() {
  return (
    <div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
            Penerimaan Oktober 2024
          </span>
          <div className="w-8 h-8 rounded-lg bg-secondary-container/60 flex items-center justify-center text-on-secondary-container">
            <span className="material-symbols-outlined text-lg">trending_up</span>
          </div>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-headline-lg text-headline-lg text-on-surface font-code-num">Rp 12.800.000</span>
          <span className="font-label-sm text-label-sm text-secondary font-semibold">94.8%</span>
        </div>
      </div>
      <div className="mt-4">
        <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
          <div className="bg-secondary h-full rounded-full" style={{ width: '94.8%' }}></div>
        </div>
        <div className="flex justify-between items-center mt-2 font-label-sm text-label-sm text-on-surface-variant">
          <span>Target: Rp 13.500.000</span>
          <span className="text-secondary font-semibold">Tersisa Rp 700k</span>
        </div>
      </div>
    </div>
  )
}
