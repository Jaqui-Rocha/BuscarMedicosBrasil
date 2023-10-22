import { Link, Outlet } from 'react-router-dom'
import { Button, Container, Fixed } from '../Profile/styleProfile'

import arrowRight from '../../assets/icons/arrowRight.png'
import { useState } from 'react'
import Dados from './dados'
const Profile = () => {
  const [dados, setDados] = useState()
  return (
    <>
      <Container>
        <h1>Edição de Perfil</h1>
        <Button to="/Layout/1/Dados">
          <h3>Dados</h3>
          <img src={arrowRight} />
        </Button>
        <Button to="">
          <h3>Alterar Senha</h3>
          <img src={arrowRight} />
        </Button>
        <Button to="/Layout/1/Administradores">
          <h3>Administradores</h3>
          <img src={arrowRight} />
        </Button>
      </Container>
      <Fixed>
        <Outlet />
      </Fixed>
    </>
  )
}
export default Profile
