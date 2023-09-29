import { NavLink, Container, Image } from './styleSideMenu'
import Logo from '../../assets/LogoBuscarMedicosBrasil.png'
import usersThree from '../../assets/icons/users-three.svg'
import dollar from '../../assets/icons/dollar.svg'
import pawCodeTwo from '../../assets/icons/pay-code-two.svg'
import remind from '../../assets/icons/remind.svg'
import help from '../../assets/icons/help.svg'
import { IconSideMenu } from './styleSideMenu'
import Especialidades from '../Icons/especialidades'
import Dashboard from '../Icons/dashboard'
export const SideMenu: React.FC = () => {
  return (
    <>
      <Container>
        <Image src={Logo} />
        <NavLink to="">
          <Dashboard />
          Dashboard
        </NavLink>
        <NavLink to="">Usuários cadastrados</NavLink>
        <NavLink to="">Planos</NavLink>
        <NavLink to="">
          <IconSideMenu src={pawCodeTwo} />
          Pagamentos
        </NavLink>
        <NavLink to="">
          <Especialidades fill="currentColor" />
          Especialidades
        </NavLink>
        <NavLink to="">
          <IconSideMenu src={remind} />
          Notificações
        </NavLink>
        <NavLink to="">
          <IconSideMenu src={help} />
          FAQ
        </NavLink>
      </Container>
    </>
  )
}
