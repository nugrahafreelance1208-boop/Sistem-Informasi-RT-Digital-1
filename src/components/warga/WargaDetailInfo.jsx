export default function WargaDetailInfo({ family }) {
  if (!family) return null
  const lunas = family.iuran === 'Lunas'
  return (
    <>
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
            Detail Keluarga Terpilih
          </span>
          <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">{family.kepala}</h2>
          <div className="flex items-center gap-2 mt-1">
            <span className="font-label-sm text-label-sm bg-surface-container-low px-2 py-0.5 rounded font-semibold text-on-surface">
              {family.blok}
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">RT 04 / RW 08</span>
          </div>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
          Tetap
        </span>
      </div>

      <div className="p-3 bg-surface-container-low rounded-lg flex flex-col gap-1.5 font-body-sm text-body-sm">
        <div className="flex items-center justify-between">
          <span className="text-on-surface-variant font-label-sm text-label-sm">Nomor Kartu Keluarga:</span>
          <span className="font-code-num text-code-num text-on-surface font-bold">{family.noKK}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-on-surface-variant font-label-sm text-label-sm">Kontak WhatsApp RT:</span>
          <span className="font-body-sm text-body-sm text-secondary font-semibold">{family.kontak}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-on-surface-variant font-label-sm text-label-sm">Status Iuran Bulanan:</span>
          {lunas ? (
            <span className="font-label-sm text-label-sm text-[#065F46] bg-[#ECFDF5] px-2 py-0.5 rounded-full font-bold">
              {family.iuranLabel}
            </span>
          ) : (
            <span className="font-label-sm text-label-sm text-[#9F1239] bg-[#FFF1F2] px-2 py-0.5 rounded-full font-bold">
              {family.iuranLabel}
            </span>
          )}
        </div>
      </div>
    </>
  )
}
