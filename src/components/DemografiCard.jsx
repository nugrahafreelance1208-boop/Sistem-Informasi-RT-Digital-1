export default function DemografiCard() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
      <div className="flex items-center justify-between pb-space-sm">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary text-xl">pie_chart</span>
          <h2 className="font-title-md text-title-md text-on-surface font-bold">Demografi Warga RT 04</h2>
        </div>
        <span className="font-label-sm text-label-sm bg-surface-container text-on-surface-variant px-2 py-0.5 rounded-full font-semibold">
          428 Jiwa
        </span>
      </div>

      <div className="mt-space-xs">
        <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant mb-1">
          <span>Distribusi Kelompok Usia</span>
          <span className="font-bold text-on-surface">Produktif Dominan</span>
        </div>
        <div className="flex h-3 w-full rounded-full overflow-hidden bg-surface-container gap-0.5">
          <div className="bg-primary-container h-full" style={{ width: '18%' }} title="Anak-anak: 18%"></div>
          <div className="bg-secondary h-full" style={{ width: '68%' }} title="Usia Produktif: 68%"></div>
          <div className="bg-primary-fixed-dim h-full" style={{ width: '14%' }} title="Lansia: 14%"></div>
        </div>
        <div className="flex items-center justify-between font-body-sm text-body-sm mt-2 text-on-surface-variant">
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
            <span>Anak (18%)</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
            <span className="font-semibold text-on-surface">Produktif (68%)</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-primary-fixed-dim"></span>
            <span>Lansia (14%)</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-space-sm mt-space-md">
        <div className="p-space-sm bg-surface-container-low rounded-xl flex flex-col justify-between">
          <span className="font-label-sm text-label-sm text-on-surface-variant">Gender Ratio</span>
          <div className="flex items-center justify-between mt-2">
            <div className="flex flex-col">
              <span className="font-title-sm text-title-sm text-on-surface font-bold">218 L</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">51%</span>
            </div>
            <div className="h-6 w-px bg-outline-variant/40"></div>
            <div className="flex flex-col text-right">
              <span className="font-title-sm text-title-sm text-on-surface font-bold">210 P</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">49%</span>
            </div>
          </div>
        </div>
        <div className="p-space-sm bg-surface-container-low rounded-xl flex flex-col justify-between">
          <span className="font-label-sm text-label-sm text-on-surface-variant">Status Tempat Tinggal</span>
          <div className="flex items-center justify-between mt-2">
            <div className="flex flex-col">
              <span className="font-title-sm text-title-sm text-secondary font-bold">84%</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Rumah Milik</span>
            </div>
            <div className="h-6 w-px bg-outline-variant/40"></div>
            <div className="flex flex-col text-right">
              <span className="font-title-sm text-title-sm text-tertiary font-bold">16%</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Sewa / Kontrak</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
