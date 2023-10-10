import { NavLink, Container, Image } from './styleSideMenu'
import Logo from '../../assets/LogoBuscarMedicosBrasil.png'
import Especialidades from '../Icons/especialidades'
import Dashboard from '../Icons/dashboard'
import UsuariosCadastrados from '../Icons/usuariosCadastrados'
import Planos from '../Icons/planos'
import Pagamentos from '../Icons/pagamentos'
import Notificacoes from '../Icons/notificacoes'
import Faq from '../Icons/faq'
export const SideMenu: React.FC = () => {
  return (
    <>
      <Container>
        <Image src={Logo} />
        <NavLink to="/Layout">
          <Dashboard />
          Dashboard
        </NavLink>
        <NavLink to="/Layout/2">
          <UsuariosCadastrados />
          Usuários cadastrados
        </NavLink>
        <NavLink to="">
          <Planos />
          Planos
        </NavLink>
        <NavLink to="">
          <Pagamentos />
          Pagamentos
        </NavLink>
        <NavLink to="">
          <Especialidades fill="currentColor" />
          Especialidades
        </NavLink>
        <NavLink to="">
          <Notificacoes />
          Notificações
        </NavLink>
        <NavLink to="">
          {' '}
          <Faq />
          FAQ
        </NavLink>
      </Container>
    </>
  )
}
