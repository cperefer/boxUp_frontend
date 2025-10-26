import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BoxUp } from './BoxUp'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    <BoxUp />
  </StrictMode>,
)
