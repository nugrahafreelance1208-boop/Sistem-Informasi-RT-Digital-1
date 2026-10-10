import { useEffect, useState } from 'react'
import { isSupabaseConfigured } from '../lib/supabaseClient'

export function useSupabaseList(fetcher, args, fallback) {
  const [data, setData] = useState(fallback ?? null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [live, setLive] = useState(false)
  const key = JSON.stringify(args ?? null)

  useEffect(() => {
    let cancelled = false
    if (!isSupabaseConfigured) {
      setData(fallback ?? null)
      setLive(false)
      return
    }
    setLoading(true)
    setError(null)
    fetcher(args ? JSON.parse(key) : undefined)
      .then((res) => {
        if (cancelled) return
        if (res?.error) {
          setError(res.error)
          setData(fallback ?? null)
          setLive(false)
        } else {
          setData(res?.data ?? fallback ?? null)
          setLive(true)
        }
      })
      .catch((e) => {
        if (!cancelled) {
          setError(e)
          setData(fallback ?? null)
          setLive(false)
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => { cancelled = true }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  return { data: data ?? fallback ?? null, loading, error, live }
}

export function SourceBadge({ live, loading }) {
  if (loading) {
    return (
      <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant">
        Memuat DB...
      </span>
    )
  }
  if (live) {
    return (
      <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-semibold inline-flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Live Supabase
      </span>
    )
  }
  return (
    <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant" title="Isi VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY lalu restart vite untuk live DB">
      Mode Lokal (isi .env untuk Live)
    </span>
  )
}
