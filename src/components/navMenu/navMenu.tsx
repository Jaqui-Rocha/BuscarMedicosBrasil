import { Container, Base } from './styledNavMenu'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import { ModalNavMenu } from './modalNavMenu'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import userProfile from '../../assets/icons/userProfile.png'
export const NavMenu: React.FC = () => {
  const [invisible, setVisible] = useState(false)
  const toggleVisible = () => {
    setVisible(!invisible)
  }
  return (
    <>
      <Base>
        <Container $primary>
          <IconButton area-label="">
            <MenuIcon fontSize="large" />
          </IconButton>
          <div>
            <Link to="#" onClick={toggleVisible}>
              <img src={userProfile} />
            </Link>
            {invisible && <ModalNavMenu />}
          </div>
        </Container>
      </Base>
    </>
  )
}
