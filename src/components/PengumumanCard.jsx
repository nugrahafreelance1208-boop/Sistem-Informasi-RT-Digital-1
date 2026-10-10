export default function PengumumanCard() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
      <div className="flex items-center justify-between pb-space-sm">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary text-xl">campaign</span>
          <h2 className="font-title-md text-title-md text-on-surface font-bold">Waspada &amp; Pengumuman</h2>
        </div>
        <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
      </div>
      <div className="space-y-space-sm">
        <div className="p-space-sm bg-surface-container-low rounded-xl flex items-start gap-2.5">
          <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
            health_and_safety
          </span>
          <div className="flex flex-col">
            <span className="font-title-sm text-title-sm text-on-surface font-bold">
              Jadwal Fogging Nyamuk DBD Puskesmas
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Dilaksanakan Jumat, 25 Okt pukul 08:30 WIB. Mohon warga menutup makanan dan mengamankan hewan
              peliharaan.
            </p>
            <span className="font-label-sm text-label-sm text-secondary font-semibold mt-1">
              Dikoordinasikan oleh Sie Kesehatan
            </span>
          </div>
        </div>
        <div className="p-space-sm bg-surface-container-low rounded-xl flex items-start gap-2.5">
          <span className="material-symbols-outlined text-tertiary text-xl shrink-0 mt-0.5">recycling</span>
          <div className="flex flex-col">
            <span className="font-title-sm text-title-sm text-on-surface font-bold">
              Penyesuaian Jadwal Truk Sampah
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Mulai 1 November, pengangkutan sampah organik &amp; anorganik dipisah menjadi Senin-Rabu-Sabtu.
            </p>
            <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">
              Edaran RW 08 Sukamaju
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
