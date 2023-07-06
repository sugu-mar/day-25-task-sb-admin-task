import Home from './components/pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import ForgotPassword from './components/pages/ForgotPassword'
import Chart from './components/pages/Chart'
import Tables from './components/pages/Tables'
import NotFound from './components/pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/index.html" element={<Home />} />
        <Route path="/login.html" element={<Login />} />
        <Route path="/register.html" element={<Register />} />
        <Route path="/forgot-password.html" element={<ForgotPassword />} />
        <Route path="/charts.html" element={<Chart />} />
        <Route path="/tables.html" element={<Tables />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
