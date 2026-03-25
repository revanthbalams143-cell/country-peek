import { useState, useEffect } from 'react'

export default function useCountry(code) {
  const [country, setCountry] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!code || !code.trim()) {
      setCountry(null)
      setLoading(false)
      setError(null)
      return
    }

    setLoading(true)
    setError(null)

    fetch(`https://restcountries.com/v3.1/alpha/${encodeURIComponent(code)}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Country not found.')
        }
        return res.json()
      })
      .then((data) => {
        setCountry(data?.[0] ?? null)
        if (!data?.[0]) {
          setError('Country data unavailable.')
        }
      })
      .catch((fetchError) => {
        setCountry(null)
        setError(fetchError?.message || 'Failed to load country data.')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [code])

  return { country, loading, error }
}
