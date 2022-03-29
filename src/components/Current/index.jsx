import FeatherIcon from 'feather-icons-react'
import { useGlobalState } from '../../context'
import { useConvertDate } from '../../hooks/useConvertDate'

export const Current = () => {
  const { current, city } = useGlobalState()
  const { convertDay, convertDate } = useConvertDate()
  return (
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
  )
}
