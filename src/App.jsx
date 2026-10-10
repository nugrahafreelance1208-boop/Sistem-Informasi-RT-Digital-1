import { useCallback, useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import ApprovalModal from './components/ApprovalModal'
import DashboardPage from './pages/DashboardPage'
import DataWargaPage from './pages/DataWargaPage'

function getRoute() {
  const hash = window.location.hash.replace(/^#\/?/, '')
  if (hash.startsWith('data-warga')) return 'data-warga'
  return 'dashboard'
}

export default function App() {
  const [route, setRoute] = useState(() => getRoute())
  const [selectedSurat, setSelectedSurat] = useState(null)
  const [toast, setToast] = useState('')

  useEffect(() => {
    const onHash = () => setRoute(getRoute())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const showToast = useCallback((msg) => {
    setToast(msg)
    setTimeout(() => setToast(''), 3200)
  }, [])

  const navigate = useCallback((path) => {
    if (path === 'data-warga') window.location.hash = '#/data-warga'
    else if (path === 'dashboard') window.location.hash = '#/'
    else showToast('Halaman tersebut belum dibangun pada tahap ini.')
  }, [showToast])

  const handleCloseModal = (signed) => {
    setSelectedSurat(null)
    if (signed) {
      showToast('Surat berhasil disahkan secara digital dengan nomor register SIP-RT-2024/RW08/092!')
    }
  }

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen">
      <Sidebar activePath={route} onNavigate={navigate} />
      <div className="pl-0 lg:pl-64">
        <Header />
        <main className="relative pt-16 bg-surface w-full px-gutter min-h-screen">
          {route === 'data-warga' ? (
            <DataWargaPage onToast={showToast} />
          ) : (
            <DashboardPage onToast={showToast} onReviewSurat={setSelectedSurat} />
          )}
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

