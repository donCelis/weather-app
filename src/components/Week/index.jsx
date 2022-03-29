import { useGlobalState } from '../../context'
import { useConvertDate } from '../../hooks/useConvertDate'

export const Week = () => {
  const { location, city, current, filterCurrent } = useGlobalState()
  const { convertDay } = useConvertDate(location)

  return (
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
  )
}
