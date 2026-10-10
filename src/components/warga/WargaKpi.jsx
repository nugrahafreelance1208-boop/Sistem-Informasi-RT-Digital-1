export default function WargaKpi({ liveRows = null, isLive = false }) {
  const totalKK = isLive && liveRows ? liveRows.length : 128
  const tetap = isLive && liveRows ? liveRows.filter((r) => (r.statusTinggalKey || 'tetap') === 'tetap').length : 362
  const kontrak = isLive && liveRows ? liveRows.filter((r) => (r.statusTinggalKey || '') !== 'tetap').length : 66
  const perlu = isLive && liveRows ? liveRows.filter((r) => (r.verifikasiKey || '') === 'pending').length : 4
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
      <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex items-start justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
        <div className="flex flex-col">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
            Total Kepala Keluarga
          </span>
          <div className="flex items-baseline gap-2 mt-1.5">
            <span className="font-display text-display text-on-surface font-bold leading-none">{totalKK}</span>
            <span className="font-title-sm text-title-sm text-on-surface-variant">Keluarga</span>
          </div>
          <div className="flex items-center gap-1.5 mt-3 text-secondary font-label-sm text-label-sm font-medium">
            <span className="material-symbols-outlined text-base leading-none">trending_up</span>
            <span>100% Tercatat Resmi</span>
          </div>
        </div>
        <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary-container">
          <span className="material-symbols-outlined text-xl">family_restroom</span>
        </div>
      </div>

      <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex items-start justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
        <div className="flex flex-col">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
            Warga Tetap (KTP RT)
          </span>
          <div className="flex items-baseline gap-2 mt-1.5">
            <span className="font-display text-display text-on-surface font-bold leading-none">{tetap}</span>
            <span className="font-title-sm text-title-sm text-on-surface-variant">Jiwa</span>
          </div>
          <div className="flex items-center gap-1.5 mt-3 text-secondary font-label-sm text-label-sm font-medium">
            <span className="material-symbols-outlined text-base leading-none">how_to_reg</span>
            <span>{isLive ? 'Live dari Supabase' : '84.5% dari populasi'}</span>
          </div>
        </div>
        <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary">
          <span className="material-symbols-outlined text-xl">groups</span>
        </div>
      </div>

      <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex items-start justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
        <div className="flex flex-col">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
            Warga Kontrak / Domisili
          </span>
          <div className="flex items-baseline gap-2 mt-1.5">
            <span className="font-display text-display text-on-surface font-bold leading-none">66</span>
            <span className="font-title-sm text-title-sm text-on-surface-variant">Jiwa</span>
          </div>
          <div className="flex items-center gap-1.5 mt-3 text-tertiary font-label-sm text-label-sm font-medium">
            <span className="material-symbols-outlined text-base leading-none">domain</span>
            <span>15.5% status sewa/kos</span>
          </div>
        </div>
        <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-tertiary">
          <span className="material-symbols-outlined text-xl">real_estate_agent</span>
        </div>
      </div>

      <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex items-start justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
        <div className="flex flex-col">
          <span className="font-label-sm text-label-sm text-error uppercase tracking-wider font-semibold flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
            Perlu Verifikasi
          </span>
          <div className="flex items-baseline gap-2 mt-1.5">
            <span className="font-display text-display text-error font-bold leading-none">4</span>
            <span className="font-title-sm text-title-sm text-on-surface-variant">Pengajuan</span>
          </div>
          <div className="flex items-center gap-1.5 mt-3 text-error font-label-sm text-label-sm font-semibold">
            <span className="material-symbols-outlined text-base leading-none">assignment_late</span>
            <span>Mutasi &amp; KTP Baru</span>
          </div>
        </div>
        <div className="w-10 h-10 rounded-lg bg-error-container flex items-center justify-center text-error">
          <span className="material-symbols-outlined text-xl">pending_actions</span>
        </div>
      </div>
    </div>
  )
}
