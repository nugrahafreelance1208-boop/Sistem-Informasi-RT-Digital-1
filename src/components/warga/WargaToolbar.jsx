import { BLOK_OPTIONS, DOMISILI_OPTIONS, VERIFIKASI_OPTIONS } from '../../data/mockData'

function FilterSelect({ value, onChange, options }) {
  return (
    <div className="relative min-w-[140px]">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none pl-3 pr-8 py-2 bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-container"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <span className="material-symbols-outlined absolute right-2.5 top-2.5 text-on-surface-variant pointer-events-none text-base">
        expand_more
      </span>
    </div>
  )
}

export default function WargaToolbar({
  search,
  onSearch,
  blok,
  onBlok,
  domisili,
  onDomisili,
  verifikasi,
  onVerifikasi,
  masked,
  onMasked,
  onReset
}) {
  return (
    <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
      <div className="flex flex-1 flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="relative flex-1 min-w-[280px]">
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-lg pointer-events-none">
            search
          </span>
          <input
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-surface-container-low text-on-surface placeholder:text-outline rounded font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container transition-all"
            placeholder="Cari Nama Warga, No. Rumah, Blok, atau No. KK..."
            type="text"
          />
        </div>
        <FilterSelect value={blok} onChange={onBlok} options={BLOK_OPTIONS} />
        <FilterSelect value={domisili} onChange={onDomisili} options={DOMISILI_OPTIONS} />
        <FilterSelect value={verifikasi} onChange={onVerifikasi} options={VERIFIKASI_OPTIONS} />
      </div>

      <div className="flex items-center gap-3 self-end lg:self-center pt-2 lg:pt-0">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-low">
          <span className="material-symbols-outlined text-lg text-secondary">
            {masked ? 'visibility_off' : 'visibility'}
          </span>
          <label
            className="cursor-pointer font-label-md text-label-md text-on-surface select-none flex items-center gap-2"
            htmlFor="nik-toggle"
          >
            <span>Sensor NIK</span>
            <input
              id="nik-toggle"
              type="checkbox"
              checked={masked}
              onChange={(e) => onMasked(e.target.checked)}
              className="w-4 h-4 accent-primary rounded cursor-pointer"
            />
          </label>
        </div>
        <button
          className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded transition-colors"
          title="Reset Filter"
          type="button"
          onClick={onReset}
        >
          <span className="material-symbols-outlined text-lg">filter_alt_off</span>
        </button>
      </div>
    </div>
  )
}
