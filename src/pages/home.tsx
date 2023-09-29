import { Button } from '@/components/ui'
import { SideMenu } from '@/components/sideMenu/sideMenu'
import { Global } from '@/assets/global'
import { NavMenu } from '@/components/navMenu/navMenu'
import { StyleHome } from '../assets/global'
export default function Home() {
  return (
    <StyleHome>
      <Global />
      <SideMenu />
      <NavMenu />
    </StyleHome>
  )
}
