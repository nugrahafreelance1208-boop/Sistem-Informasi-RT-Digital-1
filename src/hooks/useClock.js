import { useEffect, useState } from 'react'

const HARI = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
const BULAN = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
]

function formatClock(date) {
  const hari = HARI[date.getDay()]
  const tgl = date.getDate()
  const bulan = BULAN[date.getMonth()]
  const tahun = date.getFullYear()
  const jam = String(date.getHours()).padStart(2, '0')
  const menit = String(date.getMinutes()).padStart(2, '0')
  return `${hari}, ${tgl} ${bulan} ${tahun} • ${jam}:${menit} WIB`
}

export default function useClock() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000 * 15)
    return () => clearInterval(t)
  }, [])

  return formatClock(now)
}
