import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import GreetingBar from './components/GreetingBar'
import KpiCards from './components/KpiCards'
import FinanceChart from './components/FinanceChart'
import SuratTable from './components/SuratTable'
import DemografiCard from './components/DemografiCard'
import AgendaCard from './components/AgendaCard'
import PengumumanCard from './components/PengumumanCard'
import ApprovalModal from './components/ApprovalModal'

export default function App() {
  const [selectedSurat, setSelectedSurat] = useState(null)
  const [toast, setToast] = useState('')

  const showToast = (msg) => {
    setToast(msg)
    setTimeout(() => setToast(''), 3200)
  }

  const handleCloseModal = (signed) => {
    setSelectedSurat(null)
    if (signed) {
      showToast('Surat berhasil disahkan secara digital dengan nomor register SIP-RT-2024/RW08/092!')
    }
  }

  const handleExport = () => {
    showToast('Menyiapkan Berkas Laporan Bulanan (PDF & Excel RT 04 Sukamaju)... Pengunduhan akan dimulai.')
  }

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen">
      <Sidebar />
      <div className="pl-0 lg:pl-64">
        <Header />
        <main className="relative pt-16 bg-surface w-full px-gutter min-h-screen">
          <div className="flex flex-col w-full pb-space-xl">
            <GreetingBar onExport={handleExport} />
            <KpiCards />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
              <div className="lg:col-span-8 flex flex-col gap-gutter">
                <FinanceChart />
                <SuratTable onReview={setSelectedSurat} />
              </div>
              <div className="lg:col-span-4 flex flex-col gap-gutter">
                <DemografiCard />
                <AgendaCard />
                <PengumumanCard />
              </div>
            </div>
          </div>
        </main>
      </div>

      <ApprovalModal data={selectedSurat} onClose={handleCloseModal} />

      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] bg-primary text-on-primary px-space-md py-2.5 rounded-xl shadow-xl flex items-center gap-2 max-w-[90vw]">
          <span className="material-symbols-outlined text-base text-secondary-container">check_circle</span>
          <span className="font-body-md text-body-md">{toast}</span>
        </div>
      )}
    </div>
  )
}
