export function SuratStatusPill({ variant, text }) {
  if (variant === 'menunggu') {
    return (
      <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold self-start sm:self-auto">
        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
        <span>{text}</span>
      </div>
    )
  }
  if (variant === 'verifikasi') {
    return (
      <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold self-start sm:self-auto">
        <span className="w-2 h-2 rounded-full bg-tertiary"></span>
        <span>{text}</span>
      </div>
    )
  }
  if (variant === 'selesai') {
    return (
      <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold self-start sm:self-auto">
        <span className="material-symbols-outlined text-sm">check_circle</span>
        <span>{text}</span>
      </div>
    )
  }
  return (
    <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold self-start sm:self-auto">
      <span className="material-symbols-outlined text-sm">warning</span>
      <span>{text}</span>
    </div>
  )
}
