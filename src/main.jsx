import { StrictMode } from 'react'
import { render } from 'react-dom'
import './styles/index.css'

import { Weather } from './components/Weather'

render(
  <StrictMode>
    <Weather />
  </StrictMode>,
  document.getElementById('root')
)
