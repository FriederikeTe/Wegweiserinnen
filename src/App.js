import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Merian from './pages/Merian'
import Lovelace from './pages/Lovelace'
import Syers from './pages/Syers'
import Franklin from './pages/Franklin'
import Pizan from './pages/Pizan'
import MacDonald from './pages/MacDonald'
import Combahee from './pages/Combahee'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lovelace" element={<Lovelace />} />
        <Route path="/merian" element={<Merian />} />
        <Route path="/syers" element={<Syers />} />
        <Route path="/franklin" element={<Franklin />} />
        <Route path="/pizan" element={<Pizan />} />
        <Route path="/macDonald" element={<MacDonald />} />
        <Route path="/combahee" element={<Combahee />} />
      </Routes>
    </BrowserRouter>
  )
}