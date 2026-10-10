import { FINANCE_BARS } from '../data/mockData'

export default function FinanceChart() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-md">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-xl">analytics</span>
            <h2 className="font-title-md text-title-md text-on-surface font-bold">
              Tren Kas &amp; Penerimaan Iuran Warga
            </h2>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            Komparasi Target vs Realisasi Penerimaan Iuran Lingkungan 6 Bulan Terakhir (Mei - Okt 2024)
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-primary-container"></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">Realisasi</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-surface-container-highest"></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">Target (Rp 9.2 Jt)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-error/70"></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">Beban/Biaya</span>
          </div>
        </div>
      </div>

      <div className="w-full bg-surface-container-low rounded-xl p-space-md">
        <svg className="w-full h-64 overflow-visible" fill="none" viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg">
          <line className="text-outline-variant/30" stroke="currentColor" strokeDasharray="4 4" x1="40" x2="660" y1="20" y2="20"></line>
          <line className="text-outline-variant/30" stroke="currentColor" strokeDasharray="4 4" x1="40" x2="660" y1="65" y2="65"></line>
          <line className="text-outline-variant/30" stroke="currentColor" strokeDasharray="4 4" x1="40" x2="660" y1="110" y2="110"></line>
          <line className="text-outline-variant/30" stroke="currentColor" strokeDasharray="4 4" x1="40" x2="660" y1="155" y2="155"></line>
          <line className="text-outline-variant/50" stroke="currentColor" x1="40" x2="660" y1="190" y2="190"></line>

          <text className="font-label-sm text-[10px] fill-current text-on-surface-variant" textAnchor="end" x="32" y="24">10 Jt</text>
          <text className="font-label-sm text-[10px] fill-current text-on-surface-variant" textAnchor="end" x="32" y="69">7.5 Jt</text>
          <text className="font-label-sm text-[10px] fill-current text-on-surface-variant" textAnchor="end" x="32" y="114">5.0 Jt</text>
          <text className="font-label-sm text-[10px] fill-current text-on-surface-variant" textAnchor="end" x="32" y="159">2.5 Jt</text>
          <text className="font-label-sm text-[10px] fill-current text-on-surface-variant" textAnchor="end" x="32" y="193">0</text>

          <line stroke="#006d41" strokeDasharray="6 6" strokeOpacity="0.4" strokeWidth="1.5" x1="40" x2="660" y1="35" y2="35"></line>

          {FINANCE_BARS.map((m) => (
            <g key={m.label}>
              <rect
                className={m.active ? 'fill-secondary' : 'fill-primary-container'}
                height={m.rh}
                rx="3"
                width="22"
                x={m.x}
                y={m.rx}
              ></rect>
              <rect fill="#ba1a1a" fillOpacity="0.75" height={m.bh} rx="3" width="16" x={m.bx} y={m.by}></rect>
              <text
                className={
                  m.active
                    ? 'font-label-sm text-[11px] fill-current text-secondary font-bold'
                    : 'font-label-sm text-[11px] fill-current text-on-surface-variant font-medium'
                }
                textAnchor="middle"
                x={m.x + 19}
                y="208"
              >
                {m.label}
              </text>
            </g>
          ))}

          <path
            d="M 86 120 Q 186 110, 286 102 T 386 85 T 486 110 T 586 92"
            fill="none"
            stroke="#90f4b7"
            strokeLinecap="round"
            strokeWidth="3"
          ></path>
          <circle className="fill-primary" cx="586" cy="92" r="5" stroke="#90f4b7" strokeWidth="2"></circle>
        </svg>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm mt-space-md pt-space-xs">
        <div className="p-space-sm bg-surface-container rounded-lg flex items-center justify-between">
          <span className="font-body-sm text-body-sm text-on-surface-variant">Pemasukan Okt 2024</span>
          <span className="font-code-num text-code-num text-primary-container font-bold">Rp 8.400.000</span>
        </div>
        <div className="p-space-sm bg-surface-container rounded-lg flex items-center justify-between">
          <span className="font-body-sm text-body-sm text-on-surface-variant">Pengeluaran Operasional</span>
          <span className="font-code-num text-code-num text-error font-bold">Rp 3.150.000</span>
        </div>
        <div className="p-space-sm bg-surface-container rounded-lg flex items-center justify-between">
          <span className="font-body-sm text-body-sm text-on-surface-variant">Surplus Bersih Bulan Ini</span>
          <span className="font-code-num text-code-num text-secondary font-bold">+Rp 5.250.000</span>
        </div>
      </div>
    </div>
  )
}
