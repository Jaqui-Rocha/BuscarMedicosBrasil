import BaseLayout from './pages/baseLayout'

import PageLogin from './pages/login'
import Home from './pages/home/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './pages/contact'

import UsuarioCadastrado from './pages/usuariosCadastrados'
import Specialties from './pages/Specialties'
import ModalDelete from './components/modal/modalDelete/modalDelete'
import { PropsSpecialties } from './config/Requisitions/types'
import Profile from '../../BuscarMedicosBrasil/src/pages/Profile/index'
import Dados from './pages/Profile/dados'
import Administradores from './pages/Profile/administradores'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLogin />} />
        <Route path="/Layout" element={<BaseLayout />}>
          <Route path="/Layout" element={<Home />} />
          <Route path="1" element={<Profile />}>
            <Route path="/Layout/1/Dados" element={<Dados />} />
            <Route
              path="/Layout/1/Administradores"
              element={<Administradores />}
            />
          </Route>
          <Route path="2" element={<UsuarioCadastrado />} />
          <Route path="5" element={<Specialties />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
