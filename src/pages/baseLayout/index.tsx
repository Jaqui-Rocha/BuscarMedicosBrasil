import { SideMenu } from '../../components/sideMenu/sideMenu'
import { NavMenu } from '../../components/navMenu/navMenu'
import { StyleHome } from '@/assets/global'
import GlobalStyles from '@/assets/styles/global-styles'
import { Outlet } from 'react-router-dom'
import { Fixed } from './style'
export default function BaseLayout() {
  return (
    <>
      <StyleHome>
        <GlobalStyles />

        <SideMenu />
        <NavMenu />
      </StyleHome>
      <Fixed>
        <Outlet />
      </Fixed>
    </>
  )
}
