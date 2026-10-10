export function IuranStatusBadge({ status }) {
  if (status === 'Lunas') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold">
        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Lunas
      </span>
    )
  }
  if (status === 'Menunggak') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold">
        <span className="w-1.5 h-1.5 rounded-full bg-error"></span> Menunggak
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container text-tertiary font-label-sm text-label-sm font-bold">
      <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Perlu Verifikasi
    </span>
  )
}
