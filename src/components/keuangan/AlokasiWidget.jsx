import { ALOKASI_TARIF } from '../../data/mockData'

export default function AlokasiWidget() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
            Struktur Alokasi Tarif Iuran Tetap
          </h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Ketetapan Musyawarah Warga RT 04 (Rp 100.000 / KK / Bulan)
          </p>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface font-semibold">
          SK-RT/004/2024
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {ALOKASI_TARIF.map((a) => (
          <div key={a.nama} className="p-3.5 rounded-lg bg-surface-container-low flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${a.box}`}>
                <span className="material-symbols-outlined text-lg">{a.icon}</span>
              </div>
              <div>
                <span className="font-title-sm text-title-sm font-bold text-on-surface block">{a.nama}</span>
                <span className="font-label-sm text-label-sm text-outline">{a.persen}</span>
              </div>
            </div>
            <span className={`font-code-num text-code-num font-bold ${a.amount}`}>{a.nominal}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
