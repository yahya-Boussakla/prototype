import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import TodosPage from './app/page.jsx'
import { Login } from './pages/login.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<TodosPage />} />
      </Routes>
    </AuthProvider>
  </StrictMode>
  </BrowserRouter>,
)
