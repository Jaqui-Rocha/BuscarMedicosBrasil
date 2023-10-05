import { Container } from './styledNavMenu'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import perfil from '../../assets/icons/perfil.svg'
export const NavMenu: React.FC = () => {
  return (
    <>
      <Container $primary>
        <IconButton area-label="">
          <MenuIcon fontSize="large" />
        </IconButton>
        <img src={perfil} />
      </Container>
    </>
  )
}