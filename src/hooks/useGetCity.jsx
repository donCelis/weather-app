import { useState, useEffect } from 'react'

import { getCoords } from '../utils/getCoords'
import { fetchCity } from '../utils/fetchCity'
import { useGlobalState } from '../context'

export const useGetCity = ({ lang }) => {
  const { setCurrent, setCity } = useGlobalState()
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
    data()
  }, [lang])

  return { loading, error }
}
