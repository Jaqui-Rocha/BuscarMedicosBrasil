import { Container, Base } from './styledNavMenu'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import { ModalNavMenu } from './modalNavMenu'
import { useState, useEffect } from 'react'
import userProfile from '../../assets/icons/userProfile.png'
import { Profile } from '@/config/profile'
import { ProfileProps } from '@/config/profile/types'
import {
  DFlex,
  Gap,
  ProfileLink
} from '../painelDashboard/stylepainelDashboard2'
export const NavMenu: React.FC = () => {
  const [invisible, setVisible] = useState(false)
  const [userData, setUserData] = useState<ProfileProps | null>()
  const toggleVisible = () => {
    setVisible(!invisible)
  }
  useEffect(() => {
    async function userProfile() {
      try {
        const data: ProfileProps | null = await Profile()
        if (data) {
          setUserData(data)
          console.log(data)
        }
      } catch (error) {
        console.log('Erro', error)
      }
    }
    userProfile()
  }, [])
  return (
    <>
      <Base>
        <Container $primary>
          <IconButton area-label="">
            <MenuIcon fontSize="large" />
          </IconButton>
          <div>
            <ProfileLink to="#" onClick={toggleVisible}>
              <DFlex>
                <img src={userProfile} />
                <div>
                  <Gap>{userData?.email}</Gap>
                  <Gap>{userData?.firstName}</Gap>
                </div>
              </DFlex>
            </ProfileLink>
            {invisible && <ModalNavMenu />}
          </div>
        </Container>
      </Base>
    </>
  )
}
