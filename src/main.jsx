import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Ram from './Ram.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Ram />
    {/* <App /> */}
  </StrictMode>,
)
