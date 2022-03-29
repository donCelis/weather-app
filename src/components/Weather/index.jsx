import FeatherIcon from 'feather-icons-react'

import './weather.css'
import { useConvertDate } from '../../hooks/useConvertDate'
import { useGetCity } from '../../hooks/useGetCity'
import { Lang } from '../Lang'
import { useGlobalState } from '../../context'
import { wind } from '../../utils/wind'
import { Current } from '../Current'

export const Weather = () => {
  const { location, current, city, filterCurrent } = useGlobalState()
  const { loading, error } = useGetCity(location)
  const { convertDay } = useConvertDate(location)

  return loading
    ? (
      <p className='text-white'>{error && error.message}</p>
      )
    : (
      <div className='container'>
        <Current />
        <div className='info-side'>
          <Lang />
          <div className='today-info-container'>
            <div className='today-info'>
              <div className='precipitation'>
                <span className='title'>PRECIPITATION</span>
                <span className='value'>{current.pop * 100} %</span>
              </div>
              <div className='humidity'>
                <span className='title'>HUMIDITY</span>
                <span className='value'>{current.humidity} %</span>
              </div>
              <div className='wind'>
                <span className='title'>WIND</span>
                <span className='value'>{wind(current.speed)} km/h</span>
              </div>
            </div>
          </div>
          <div className='week-container'>
            <ul className='week-list'>
              {city.list.map((day, index) => (
                <li
                  onClick={() => filterCurrent(day.dt)}
                  key={index}
                  className={current.dt === day.dt ? 'active' : ''}
                >
                  <img
                    className='day-icon'
                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    alt=''
                  />
                  <span className='day-name'>{convertDay(day.dt)}</span>
                  <span className='day-temp'>{day.temp.day.toFixed(0)}°C</span>
                </li>
              ))}
            </ul>
          </div>
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
