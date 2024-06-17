import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { UserProvider } from './api/UserContext'
import Authentication from './pages/Authentication'
import Dashboard from './pages/Dashboard'
import Collection from './components/Collection'
function App() {

  return (
    <BrowserRouter>

      <UserProvider>
        <Routes>
          <Route path='/auth' element={<Authentication />} />

          <Route path='/*' element={<Dashboard />} />
        </Routes>
      </UserProvider>

    </BrowserRouter>
  )
}

export default App
