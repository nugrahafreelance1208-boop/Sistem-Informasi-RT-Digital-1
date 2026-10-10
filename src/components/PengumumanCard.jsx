import { useSupabaseList, SourceBadge } from '../hooks/useSupabaseList'
import { fetchPengumuman } from '../lib/supabaseQueries'
import { mapPengumumanRow } from '../lib/mappersSurat'

const FALLBACK = [
  {
    judul: 'Jadwal Fogging Nyamuk DBD Puskesmas',
    isi: 'Dilaksanakan Jumat, 25 Okt pukul 08:30 WIB. Mohon warga menutup makanan dan mengamankan hewan peliharaan.',
    icon: 'health_and_safety',
    koordinator: 'Dikoordinasikan oleh Sie Kesehatan',
  },
  {
    judul: 'Penyesuaian Jadwal Truk Sampah',
    isi: 'Mulai 1 November, pengangkutan sampah organik & anorganik dipisah menjadi Senin-Rabu-Sabtu.',
    icon: 'recycling',
    koordinator: 'Edaran RW 08 Sukamaju',
  },
]

export default function PengumumanCard() {
  const q = useSupabaseList(fetchPengumuman, null, null)
  const rows = q.live && q.data ? q.data.map(mapPengumumanRow) : FALLBACK
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
      <div className="flex items-center justify-between pb-space-sm">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary text-xl">campaign</span>
          <h2 className="font-title-md text-title-md text-on-surface font-bold">Waspada &amp; Pengumuman</h2>
        </div>
        <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
      </div>
      <div className="mt-1 mb-2"><SourceBadge live={q.live} loading={q.loading} /></div>
      <div className="space-y-space-sm">
        {rows.map((p) => (
          <div key={p.judul} className="p-space-sm bg-surface-container-low rounded-xl flex items-start gap-2.5">
            <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
              {p.icon}
            </span>
            <div className="flex flex-col">
              <span className="font-title-sm text-title-sm text-on-surface font-bold">
                {p.judul}
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                {p.isi}
              </p>
              <span className="font-label-sm text-label-sm text-secondary font-semibold mt-1">
                {p.koordinator}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
