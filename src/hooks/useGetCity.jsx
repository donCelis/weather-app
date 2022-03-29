import { useState, useEffect } from 'react'

import { getCoords } from '../utils/getCoords'
import { fetchCity } from '../utils/fetchCity'

export const useGetCity = () => {
  const [city, setCity] = useState({})
  const [current, setCurrent] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const data = async () => {
      try {
        const { latitude: lat, longitude: lon } = await getCoords()
        const res = await fetchCity({ lat, lon })
        setCity(res)
        setCurrent(res.list[0])
        setLoading(false)
      } catch (error) {
        setError(error)
      }
    }
    Object.keys(city).length === 0 && data()
  }, [])

  return { city, current, loading, error, setCurrent }
}
