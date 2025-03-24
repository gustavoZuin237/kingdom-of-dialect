import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/home'
import { Register } from './pages/register'
import { Credits } from './pages/credits'

import { Level1 } from './pages/levels/level1'
import { Level2 } from './pages/levels/level2'
import { Level3 } from './pages/levels/level3'
import { Level4 } from './pages/levels/level4'
import { Level5 } from './pages/levels/level5'
import { Level6 } from './pages/levels/level6'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/credits" element={<Credits />} />

      <Route path="/level1" element={<Level1 />} />
      <Route path="/level2" element={<Level2 />} />
      <Route path="/level3" element={<Level3 />} />
      <Route path="/level4" element={<Level4 />} />
      <Route path="/level5" element={<Level5 />} />
      <Route path="/level6" element={<Level6 />} />
    </Routes>
  )
}