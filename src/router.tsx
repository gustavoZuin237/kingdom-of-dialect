import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/home'
import { Register } from './pages/register'
import { Credits } from './pages/credits'

import { Level } from './pages/level'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/credits" element={<Credits />} />

      <Route path="/level0" element={<Level level={0} />} />
      <Route path="/level1" element={<Level level={1} />} />
      <Route path="/level2" element={<Level level={2} />} />
      <Route path="/level3" element={<Level level={3} />} />
      <Route path="/level4" element={<Level level={4} />} />
      <Route path="/level5" element={<Level level={5} />} />
      <Route path="/level6" element={<Level level={6} />} />
    </Routes>
  )
}