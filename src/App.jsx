import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { UserProvider } from './api/UserContext'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import RegisterPage from './pages/RegisterPage'
function App() {

  

  return (
    <BrowserRouter>

      <UserProvider>
        <Routes>
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/*' element={<Dashboard />} />

        </Routes>
      </UserProvider>

    </BrowserRouter>
  )
}

export default App
