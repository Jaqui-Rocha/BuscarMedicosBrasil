import { NLink, Container, Image } from './styleSideMenu'
import Logo from '../../assets/LogoBuscarMedicosBrasil.png'
import Especialidades from '../Icons/especialidades'
import Dashboard from '../Icons/dashboard'
import UsuariosCadastrados from '../Icons/usuariosCadastrados'
import Planos from '../Icons/planos'
import Pagamentos from '../Icons/pagamentos'
import Notificacoes from '../Icons/notificacoes'
import Faq from '../Icons/faq'
import Home from '@/pages/home/home'
import { Outlet } from 'react-router-dom'
export const SideMenu: React.FC = () => {
  return (
    <>
      <Container>
        <Image src={Logo} />
        <NLink to="/Layout">
          <Dashboard />
          Dashboard
        </NLink>
        <NLink to="/Layout/2">
          <UsuariosCadastrados />
          Usuários cadastrados
        </NLink>
        <NLink to="">
          <Planos />
          Planos
        </NLink>
        <NLink to="">
          <Pagamentos />
          Pagamentos
        </NLink>
        <NLink to="/Layout/5">
          <Especialidades fill="currentColor" />
          Especialidades
        </NLink>
        <NLink to="">
          <Notificacoes />
          Notificações
        </NLink>
        <NLink to="">
          {' '}
          <Faq />
          FAQ
        </NLink>
      </Container>
    </>
  )
}
