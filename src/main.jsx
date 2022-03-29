import { StrictMode } from 'react'
import { render } from 'react-dom'
import './styles/index.css'

import { Weather } from './components/Weather'
import { AppProvider } from './context'

render(
  <StrictMode>
    <AppProvider>
      <Weather />
    </AppProvider>
  </StrictMode>,
  document.getElementById('root')
)
