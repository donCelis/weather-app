import { useState, useEffect } from 'react'

import { getCoords } from '../utils/getCoords'
import { fetchCity } from '../utils/fetchCity'

export const useGetCity = ({ lang }) => {
  const [city, setCity] = useState({})
  const [current, setCurrent] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const data = async () => {
      try {
        const { latitude: lat, longitude: lon } = await getCoords()
        const { city, list } = await fetchCity({ lat, lon, lang })
        setCity({ city, list })
        setCurrent(list[0])
        setLoading(false)
      } catch (error) {
        setError(error)
      }
    }
    city && data()
  }, [lang])

  return { city, current, loading, error, setCurrent }
}
