import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TodosPage from './app/page.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodosPage />
  </StrictMode>,
)
