import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ShaleTheme } from './components/shale/ShaleTheme.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ShaleTheme>
      <App />
    </ShaleTheme>
  </StrictMode>,
)
