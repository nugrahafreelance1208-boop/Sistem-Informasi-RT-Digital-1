import GreetingBar from '../components/GreetingBar'
import KpiCards from '../components/KpiCards'
import FinanceChart from '../components/FinanceChart'
import SuratTable from '../components/SuratTable'
import DemografiCard from '../components/DemografiCard'
import AgendaCard from '../components/AgendaCard'
import PengumumanCard from '../components/PengumumanCard'

export default function DashboardPage({ onToast, onReviewSurat }) {
  const handleExport = () => {
    onToast('Menyiapkan Berkas Laporan Bulanan (PDF & Excel RT 04 Sukamaju)... Pengunduhan akan dimulai.')
  }

  return (
    <div className="flex flex-col w-full pb-space-xl">
      <GreetingBar onExport={handleExport} />
      <KpiCards />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        <div className="lg:col-span-8 flex flex-col gap-gutter">
          <FinanceChart />
          <SuratTable onReview={onReviewSurat} />
        </div>
        <div className="lg:col-span-4 flex flex-col gap-gutter">
          <DemografiCard />
          <AgendaCard />
          <PengumumanCard />
        </div>
      </div>
    </div>
  )
}
