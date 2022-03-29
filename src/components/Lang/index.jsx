import { useGlobalState } from '../../context'
import flagEs from '../../assets/es.svg'
import flagEn from '../../assets/gb.svg'

export const Lang = () => {
  const { changeLanguage } = useGlobalState()
  return (
    <div className='lang'>
      <button onClick={() => changeLanguage('en')} className='icon-location'><img src={flagEn} alt='English' /></button>
      <button onClick={() => changeLanguage('es')} className='icon-location'><img src={flagEs} alt='Spanish' /></button>
    </div>
  )
}
