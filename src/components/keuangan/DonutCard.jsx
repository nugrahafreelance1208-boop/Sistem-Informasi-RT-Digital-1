export default function DonutCard() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm flex flex-col">
      <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">Rasio Kepatuhan Iuran</h4>
      <span className="font-label-sm text-label-sm text-on-surface-variant mb-4">
        Update sinkronisasi: Hari ini 10:45 WIB
      </span>
      <div className="flex items-center justify-around">
        <div className="relative w-32 h-32 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-surface-container"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
            ></path>
            <path
              className="text-secondary"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeDasharray="94.8, 100"
              strokeLinecap="round"
              strokeWidth="3.5"
            ></path>
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="font-headline-md text-headline-md font-bold text-on-surface leading-none">94.8%</span>
            <span className="font-label-sm text-label-sm text-secondary font-semibold">Terkumpul</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 font-label-sm text-label-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-secondary"></span>
            <span className="text-on-surface">Lunas: <strong>121 KK</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-error"></span>
            <span className="text-on-surface">Menunggak: <strong>7 KK</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-outline"></span>
            <span className="text-on-surface">Subsidi Bebas: <strong>4 KK</strong></span>
          </div>
        </div>
      </div>
      <div className="mt-4 p-3 rounded-lg bg-surface-container-low flex items-center gap-2.5">
        <span className="material-symbols-outlined text-secondary text-lg">verified</span>
        <p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
          Transparansi RT 04 Sukamaju diverifikasi secara otomatis oleh sistem pencatatan mandiri warga.
        </p>
      </div>
    </div>
  )
}
