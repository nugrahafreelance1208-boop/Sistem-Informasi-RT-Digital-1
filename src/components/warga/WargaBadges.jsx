export function StatusTinggalBadge({ value }) {
  const warn = value === 'Kontrak/Sewa'
  return (
    <span
      className={
        warn
          ? 'font-label-sm text-label-sm px-2 py-0.5 rounded font-medium bg-tertiary-fixed text-on-tertiary-fixed'
          : 'font-label-sm text-label-sm px-2 py-0.5 rounded font-medium bg-surface-container-low text-on-surface'
      }
    >
      {value}
    </span>
  )
}

export function IuranBadge({ value }) {
  const lunas = value === 'Lunas'
  return (
    <span
      className={
        lunas
          ? 'inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#065F46] font-label-sm text-label-sm font-semibold'
          : 'inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#FFF1F2] text-[#9F1239] font-label-sm text-label-sm font-semibold'
      }
    >
      <span className={lunas ? 'w-1.5 h-1.5 rounded-full bg-[#10B981]' : 'w-1.5 h-1.5 rounded-full bg-[#F43F5E]'}></span>
      {value}
    </span>
  )
}

export function VerifBadge({ value }) {
  const sah = value === 'Sah'
  return (
    <span
      className={
        sah
          ? 'inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#065F46] font-label-sm text-label-sm font-semibold'
          : 'inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#FFFBEB] text-[#92400E] font-label-sm text-label-sm font-semibold'
      }
    >
      {sah ? (
        <span className="material-symbols-outlined text-xs">verified</span>
      ) : (
        <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]"></span>
      )}
      {value}
    </span>
  )
}

/*__TABLE_BODY__*/
