import { useMemo, useState } from 'react'
import { SURAT_APPLICATIONS_ALL, SURAT_PREVIEWS } from '../data/mockData'
import SuratHeader from '../components/surat/SuratHeader'
import SuratStepper from '../components/surat/SuratStepper'
import SuratFilterTabs from '../components/surat/SuratFilterTabs'
import { SelectedSuratCard, DomisiliSuratCard } from '../components/surat/SuratCardsA'
import { NikahSuratCard, PindahSuratCard } from '../components/surat/SuratCardsB'
import SuratPreview from '../components/surat/SuratPreview'
import SuratTemplates from '../components/surat/SuratTemplates'

const CARD_MAP = {
  'skck-kevin': SelectedSuratCard,
  'domisili-ratna': DomisiliSuratCard,
  'nikah-siti': NikahSuratCard,
  'pindah-bambang': PindahSuratCard
}

export default function SuratPage({ onToast }) {
  const [filter, setFilter] = useState('menunggu')
  const [previewKey, setPreviewKey] = useState('skck-kevin')

  const rows = useMemo(() => {
    if (filter === 'arsip') return SURAT_APPLICATIONS_ALL
    return SURAT_APPLICATIONS_ALL.filter((a) => a.statusKey === filter)
  }, [filter])

  return (
    <div className="flex flex-col w-full">
      <div className="py-space-md flex flex-col gap-space-lg">
        <SuratHeader onToast={onToast} />
        <SuratStepper />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <SuratFilterTabs active={filter} onChange={setFilter} />
            <div className="flex flex-col gap-space-md">
              {rows.map((app) => {
                const Card = CARD_MAP[app.key] ?? SelectedSuratCard
                return <Card key={app.key} app={app} onToast={onToast} onSelect={setPreviewKey} />
              })}
              {rows.length === 0 && (
                <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm text-center font-body-sm text-body-sm text-on-surface-variant">
                  Tidak ada permohonan pada tab ini.
                </div>
              )}
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-space-md lg:sticky lg:top-20">
            <SuratPreview data={SURAT_PREVIEWS[previewKey]} onToast={onToast} />
          </div>
        </div>
        <SuratTemplates onToast={onToast} />
      </div>
    </div>
  )
}
