import { useState } from 'react'
import FeatherIcon from 'feather-icons-react'
import flagEs from '../../assets/es.svg'
import flagEn from '../../assets/gb.svg'

import './weather.css'
import { useConvertDate } from '../../hooks/useConvertDate'
import { useGetCity } from '../../hooks/useGetCity'

export const Weather = () => {
  const [location, setLocation] = useState({ lang: 'en' })
  const { city, current, error, loading, setCurrent } = useGetCity(location)
  const { convertDate, convertDay } = useConvertDate(location)

  const wind = (speed) => Math.round(speed * 3.6)

  const filterCurrent = (date) => {
    const tmp = city.list.find(({ dt }) => dt === date)
    const isTmp = current.dt !== tmp.dt
    isTmp && setCurrent(tmp)
  }

  const changeLanguage = (date) => {
    setLocation({ ...location, lang: date })
  }

  return loading
    ? (
      <p className='text-white'>{error && error.message}</p>
      )
    : (
      <div className='container'>
        <div className='weather-side'>
          <div className='weather-gradient' />
          <div className='date-container'>
            <h2 className='date-dayname'>{convertDay(current.dt)}</h2>
            <span className='date-day'>{convertDate(current.dt)}</span>
            <FeatherIcon className='location-icon' icon='map-pin' />
            <span className='location'>
              {city.city.name}, {city.city.country}
            </span>
          </div>
          <div className='weather-container'>
            <img
              className='weather-icon'
              src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
              alt=''
            />
            <h1 className='weather-temp'>{current.temp.day.toFixed(0)}°C</h1>
            <h3 className='weather-desc'>{current.weather[0].description}</h3>
          </div>
        </div>
        <div className='info-side'>
          <div className='lang'>
            <button onClick={() => changeLanguage('en')} className='icon-location'><img src={flagEn} alt='English' /></button>
            <button onClick={() => changeLanguage('es')} className='icon-location'><img src={flagEs} alt='Spanish' /></button>
          </div>
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
