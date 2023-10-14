import {
  Container,
  Base,
  ImgProfile,
  ImgUser,
  Imglinha,
  ImgLogout
} from './styledNavMenu'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import linhaModal from '../../assets/icons/linhaModal.png'
import userProfile from '../../assets/icons/userProfile.png'
import SairModal from '../../assets/icons/SairModal.png'
import modalUser from '../../assets/icons/modalUser.png'
import { Link } from 'react-router-dom'
import modalProfile from '../../assets/icons/modalProfile.png'
export const NavMenu: React.FC = () => {
  return (
    <>
      <Base>
        <Container $primary>
          <IconButton area-label="">
            <MenuIcon fontSize="large" />
          </IconButton>
          <div className="">
            <img src={userProfile} />
            <div>
              <ImgProfile src={modalProfile} />
              <Link to="">
                <ImgUser src={modalUser} />
              </Link>
              <Imglinha src={linhaModal} />
              <Link to="">
                <ImgLogout src={SairModal} />
              </Link>
            </div>
          </div>
        </Container>
      </Base>
    </>
  )
}
