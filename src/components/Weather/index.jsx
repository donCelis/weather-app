import FeatherIcon from 'feather-icons-react'

import './weather.css'
import { useGetCity } from '../../hooks/useGetCity'
import { Lang } from '../Lang'
import { useGlobalState } from '../../context'
import { Current } from '../Current'
import { CurrentInfo } from '../CurrentInfo'
import { Week } from '../Week'

export const Weather = () => {
  const { location } = useGlobalState()
  const { loading, error } = useGetCity(location)

  return loading
    ? (
      <p className='text-white'>{error && error.message}</p>
      )
    : (
      <div className='container'>
        <Current />
        <div className='info-side'>
          <Lang />
          <CurrentInfo />
          <Week />
          <div className='location-container'>
            <button
              className='location-button'
            >
              <FeatherIcon icon='map-pin' />
              <span>Change location</span>
            </button>
          </div>
        </div>
      </div>
      )
}
