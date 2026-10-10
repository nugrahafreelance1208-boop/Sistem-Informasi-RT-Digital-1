import { NAV_ITEMS } from '../data/mockData'

export default function Sidebar({ activePath, onNavigate }) {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 hidden lg:flex flex-col justify-between">
      <div className="flex flex-col">
        <div className="h-16 px-space-md flex items-center gap-space-sm bg-primary">
          <img
            alt="Logo SIP-RT"
            className="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ1eo206DS0eG7cTnp4iutiDDhMumyRWvqh7Njhui6XJWgYanR6kNX_hbvFkw6GfbyQ3RlbNNYcn66aUkxrWWJpP0VhXJ6nNqf3c1ctDmxqxufuCOgB6-unwxdMEu82ED8OUkNTp3ccOlc6-XkzWLL9CT5ZJoqTO7cTC5vc9SC0Icg8bkj1hwJbeWsiMfacXkECZ5-NiqsCJ0PvBlfCwgBp7Gnu44irxVwvpXni0mmA6mcaA2cLN_SCg"
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-on-primary tracking-tight leading-none">
              SIP-RT Digital
            </span>
            <span className="font-label-sm text-label-sm text-on-primary-container leading-tight mt-0.5">
              RW 08 Sukamaju
            </span>
          </div>
        </div>

        <div className="p-space-md">
          <div className="bg-surface-container-low rounded-xl p-space-sm flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                Wilayah Aktif
              </span>
              <span className="font-label-sm text-label-sm bg-secondary-container text-on-secondary-container px-1.5 py-0.5 rounded-full font-semibold">
                Aktif
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-secondary text-base">location_on</span>
              <span className="font-title-sm text-title-sm text-on-surface font-bold truncate">
                RT 04 / RW 08
              </span>
            </div>
            <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
              Kompleks Griya Asri
            </span>
          </div>
        </div>

        <div className="px-space-md pb-space-xs">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold px-space-sm">
            Menu Administrasi
          </span>
        </div>
        <nav className="flex flex-col gap-1 px-space-md">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.path === activePath ||
              (item.path === 'keuangan-iuran' && activePath === 'keuangan') ||
              (item.path === 'layanan-surat-digital' && activePath === 'surat')
            return (
              <button
                key={item.path}
                type="button"
                onClick={() => onNavigate(item.path)}
                aria-current={isActive ? 'page' : undefined}
                className={
                  isActive
                    ? 'flex items-center gap-3 px-space-sm py-2 transition-colors bg-primary-container text-on-primary font-semibold rounded-lg text-left w-full'
                    : 'flex items-center gap-3 px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors text-left w-full'
                }
              >
                <span className="material-symbols-outlined text-xl">{item.icon}</span>
                <span className="font-title-sm text-title-sm">{item.label}</span>
              </button>
            )
          })}
        </nav>
      </div>

      <div className="p-space-md">
        <div className="bg-surface-container-low rounded-xl p-space-sm flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span className="font-label-sm text-label-sm text-on-surface font-medium">Sistem Online</span>
          </div>
          <span className="font-label-sm text-label-sm text-on-surface-variant">v2.4.0</span>
        </div>
      </div>
    </aside>
  )
}
