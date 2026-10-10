import { useMemo, useState } from 'react'
import { IURAN_LIST } from '../data/mockData'
import KeuanganHeader from '../components/keuangan/KeuanganHeader'
import KeuanganKpi from '../components/keuangan/KeuanganKpi'
import KeuanganTabs from '../components/keuangan/KeuanganTabs'
import KeuanganToolbar from '../components/keuangan/KeuanganToolbar'
import IuranTable from '../components/keuangan/IuranTable'
import AlokasiWidget from '../components/keuangan/AlokasiWidget'
import ExpenseCard from '../components/keuangan/ExpenseCard'
import DonutCard from '../components/keuangan/DonutCard'
import QrisCard from '../components/keuangan/QrisCard'

export default function KeuanganPage({ onToast }) {
  const [tab, setTab] = useState('tagihan')
  const [periode, setPeriode] = useState('okt-2024')
  const [status, setStatus] = useState('all')
  const [metode, setMetode] = useState('all')

  const rows = useMemo(() => {
    return IURAN_LIST.filter((r) => {
      if (status !== 'all') {
        if (status === 'lunas' && r.statusKey !== 'lunas') return false
        if (status === 'menunggak' && r.statusKey !== 'menunggak') return false
        if (status === 'bebas') return false
      }
      if (metode !== 'all') {
        if (metode === 'qris' && !(r.metode || '').includes('QRIS') && !(r.metode || '').includes('VA')) return false
        if (metode === 'transfer' && !(r.metode || '').includes('Slip')) return false
        if (metode === 'tunai' && !(r.metode || '').includes('Tunai')) return false
      }
      return true
    })
  }, [status, metode])

  return (
    <div className="flex flex-col w-full pb-space-xl">
      <KeuanganHeader onToast={onToast} />
      <KeuanganKpi onToast={onToast} />
      <KeuanganTabs active={tab} onChange={setTab} onToast={onToast} />
      <KeuanganToolbar
        periode={periode}
        onPeriode={(v) => { setPeriode(v); onToast(`Periode diganti — menampilkan data periode terpilih.`); }}
        status={status}
        onStatus={setStatus}
        metode={metode}
        onMetode={setMetode}
        onToast={onToast}
      />
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-md items-start">
        <div className="xl:col-span-8 flex flex-col gap-space-md">
          <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
            <div className="px-5 py-4 flex items-center justify-between bg-surface-container-lowest">
              <div className="flex items-center gap-2">
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Daftar Tagihan Iuran Warga</h3>
                <span className="font-label-sm text-label-sm text-on-surface-variant font-code-num">(Periode: Okt 2024)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-label-sm text-label-sm text-outline">Kompensasi: Rp 100.000 / KK</span>
              </div>
            </div>
            <IuranTable rows={rows} onToast={onToast} />
            <div className="px-5 py-3 bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-2 font-label-sm text-label-sm text-on-surface-variant">
              <div className="flex items-center gap-2">
                <span>Menampilkan <strong className="text-on-surface">{rows.length}</strong> dari <strong className="text-on-surface">128</strong> Kepala Keluarga</span>
              </div>
              <div className="flex items-center gap-1">
                <button className="px-2.5 py-1 rounded bg-surface-container text-outline cursor-not-allowed" disabled type="button">Sebelumnya</button>
                <button className="px-2.5 py-1 rounded bg-primary-container text-on-primary font-bold" type="button">1</button>
                <button className="px-2.5 py-1 rounded bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors" type="button">2</button>
                <button className="px-2.5 py-1 rounded bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors" type="button">3</button>
                <button className="px-2.5 py-1 rounded bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors" type="button">Selanjutnya</button>
              </div>
            </div>
          </div>
          <AlokasiWidget />
        </div>
        <div className="xl:col-span-4 flex flex-col gap-space-md">
          <ExpenseCard onToast={onToast} />
          <DonutCard />
          <QrisCard onToast={onToast} />
        </div>
      </div>
    </div>
  )
}
