import { useGlobalState } from '../../context'
import { wind } from '../../utils/wind'

export const CurrentInfo = () => {
  const { current } = useGlobalState()

  return (
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
  )
}
