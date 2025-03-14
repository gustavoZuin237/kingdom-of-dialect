import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/home'
import { Register } from './pages/register'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}