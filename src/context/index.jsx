import { createContext, useContext, useState } from 'react'

const AppState = createContext({})

export const AppProvider = ({ children }) => {
  // city
  const [city, setCity] = useState({})

  // current
  const [current, setCurrent] = useState({})

  const filterCurrent = (date) => {
    const tmp = city.list.find(({ dt }) => dt === date)
    const isTmp = current.dt !== tmp.dt
    isTmp && setCurrent(tmp)
  }

  // change language
  const [location, setLocation] = useState({ lang: 'en' })

  const changeLanguage = (date) => {
    setLocation({ ...location, lang: date })
  }
  const initialValues = {
    city,
    setCity,
    current,
    setCurrent,
    filterCurrent,
    location,
    changeLanguage
  }
  return (
    <AppState.Provider value={initialValues}>
      {children}
    </AppState.Provider>
  )
}

export const useGlobalState = () => {
  return useContext(AppState)
}
