import { useMemo, useState } from 'react'
import { KARTU_KELUARGA } from '../data/mockData'
import { useSupabaseList, SourceBadge } from '../hooks/useSupabaseList'
import { fetchKeluargaKK, fetchTagihan } from '../lib/supabaseQueries'
import { mapKeluargaRow } from '../lib/mappersCore'
import WargaBanner from '../components/warga/WargaBanner'
import WargaKpi from '../components/warga/WargaKpi'
import WargaToolbar from '../components/warga/WargaToolbar'
import WargaTable from '../components/warga/WargaTable'
import WargaDetail from '../components/warga/WargaDetail'

export default function DataWargaPage({ onToast }) {
  const [search, setSearch] = useState('')
  const [blok, setBlok] = useState('all')
  const [domisili, setDomisili] = useState('all')
  const [verifikasi, setVerifikasi] = useState('all')
  const [masked, setMasked] = useState(true)
  const [selectedKey, setSelectedKey] = useState(null)

  const kkQuery = useSupabaseList(fetchKeluargaKK, { search, blokKode: blok, tinggal: domisili, verifikasi }, null)
  const tagQuery = useSupabaseList(fetchTagihan, { periodeKode: 'okt-2024', status: 'all', metode: 'all' }, null)

  const tagByKk = useMemo(() => {
    const m = {}
    if (tagQuery.live && tagQuery.data) for (const t of tagQuery.data) m[t.kk_id] = t
    return m
  }, [tagQuery.live, tagQuery.data])

  const liveRows = useMemo(() => {
    if (!kkQuery.live || !kkQuery.data) return null
    return kkQuery.data.map((r) => mapKeluargaRow(r, tagByKk))
  }, [kkQuery.live, kkQuery.data, tagByKk])

  const fallbackRows = useMemo(() => {
    const q = search.trim().toLowerCase()
    return KARTU_KELUARGA.filter((k) => {
      if (blok !== 'all' && k.blokGroup !== blok) return false
      if (domisili !== 'all' && k.statusTinggalKey !== domisili) return false
      if (verifikasi !== 'all' && k.verifikasiKey !== verifikasi) return false
      if (!q) return true
      const hay = `${k.kepala} ${k.namaPendek} ${k.blok} ${k.jalan} ${k.noKK} ${k.nikFull} ${k.nikMasked}`.toLowerCase()
      return hay.includes(q)
    })
  }, [search, blok, domisili, verifikasi])

  const rows = liveRows ?? fallbackRows
  const isLive = Boolean(liveRows)
  const selected = (rows.find((k) => String(k.key) === String(selectedKey)) ?? rows[0]) || null

  const handleReset = () => {
    setSearch('')
    setBlok('all')
    setDomisili('all')
    setVerifikasi('all')
    onToast('Filter direset ke semua data (Supabase).')
  }

  const handleTableClick = (e) => {
    const tr = e.target.closest('tr[data-family-key]')
    if (tr) setSelectedKey(tr.dataset.familyKey)
    const btn = e.target.closest('button')
    if (!btn) return
    if (btn.classList.contains('btn-verif')) onToast(`Memverifikasi ${btn.dataset.nama}...`)
    if (btn.classList.contains('btn-edit')) onToast(`Membuka editor ${btn.dataset.nama}...`)
    if (btn.classList.contains('btn-view')) onToast(`Membuka kartu keluarga ${btn.dataset.nama}...`)
  }

  return (
    <div className="flex flex-col w-full pb-16">
      <WargaBanner onToast={onToast} />
      <div className="mt-2 flex items-center gap-2">
        <SourceBadge live={kkQuery.live} loading={kkQuery.loading} />
        {kkQuery.live && <span className="font-label-sm text-label-sm text-on-surface-variant">{rows.length} KK dari Supabase</span>}
      </div>
      <WargaKpi liveRows={rows} isLive={isLive} />
      <WargaToolbar
        search={search}
        onSearch={setSearch}
        blok={blok}
        onBlok={setBlok}
        domisili={domisili}
        onDomisili={setDomisili}
        verifikasi={verifikasi}
        onVerifikasi={setVerifikasi}
        masked={masked}
        onMasked={setMasked}
        onReset={handleReset}
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-8 flex flex-col bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
          <div className="px-5 py-3.5 bg-surface-container-low flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg text-primary-container">table_view</span>
              <span className="font-title-sm text-title-sm font-bold text-on-surface">
                Daftar Induk Kepala Keluarga (KK)
              </span>
              <span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded text-on-surface-variant font-medium">
                128 Total
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="text-on-surface-variant hover:text-on-surface p-1 rounded hover:bg-surface-container"
                type="button"
                onClick={() => onToast('Memuat ulang daftar KK...')}
              >
                <span className="material-symbols-outlined text-base">refresh</span>
              </button>
              <button
                className="text-on-surface-variant hover:text-on-surface p-1 rounded hover:bg-surface-container"
                type="button"
                onClick={() => onToast('Pengaturan kolom tabel...')}
              >
                <span className="material-symbols-outlined text-base">view_column</span>
              </button>
            </div>
          </div>
          <div onClick={handleTableClick}>
            <WargaTable rows={rows} masked={masked} selectedKey={selected?.key} />
          </div>
          <div className="px-5 py-3 bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-3 font-label-sm text-label-sm text-on-surface-variant">
            <span>
              Menampilkan <strong className="text-on-surface font-semibold">1 - {rows.length}</strong> dari{' '}
              <strong className="text-on-surface font-semibold">128</strong> Kepala Keluarga
            </span>
            <div className="flex items-center gap-1">
              <button className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container disabled:opacity-40" disabled type="button">
                <span className="material-symbols-outlined text-sm align-middle">chevron_left</span>
              </button>
              <button className="px-2.5 py-1 rounded bg-primary-container text-on-primary font-bold" type="button">1</button>
              <button className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container font-semibold" type="button">2</button>
              <button className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container font-semibold" type="button">3</button>
              <span className="px-1 text-outline">...</span>
              <button className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container font-semibold" type="button">26</button>
              <button className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container" type="button">
                <span className="material-symbols-outlined text-sm align-middle">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
        <WargaDetail family={selected} onToast={onToast} />
      </div>
    </div>
  )
}
