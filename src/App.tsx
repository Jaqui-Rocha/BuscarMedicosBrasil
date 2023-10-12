import BaseLayout from './pages/baseLayout'

import PageLogin from './pages/login'
import Home from './pages/home/home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './pages/contact'
import UsuarioCadastrado from './pages/usuariosCadastrados'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLogin />} />
        <Route path="/Layout" element={<BaseLayout />}>
          <Route path="/Layout" element={<Home />} />
          <Route path="2" element={<UsuarioCadastrado />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
