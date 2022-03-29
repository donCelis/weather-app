import { Suspense, lazy } from 'react'
import FeatherIcon from 'feather-icons-react'

import './weather.css'
import { useGetCity } from '../../hooks/useGetCity'
import { Lang } from '../Lang'
import { CurrentInfo } from '../CurrentInfo'
import { Week } from '../Week'
import { Spinner } from '../Spinner'

const Current = lazy(() => import('../Current'))

export const Weather = () => {
  const { loading, error } = useGetCity()

  return loading
    ? (
      <p className='text-white'>{error && error.message}</p>
      )
    : (
      <div className='container'>
        <Suspense fallback={<Spinner />}>
          <Current />
        </Suspense>
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
