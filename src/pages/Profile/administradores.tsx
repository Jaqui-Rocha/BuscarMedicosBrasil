import { Input, Container1 } from './styleProfile'
import edit from '../../assets/icons/edit.png'
import delet from '../../assets/icons/delete.png'

import { Bottom } from './styleProfile'
const Administradores = () => {
  return (
    <Container1>
      <h1>Administrar perfis</h1>
      <Input>
        <h2>Bruno</h2> bruno@gmail.com{' '}
        <div>
          <img src={edit} />
          <img src={delet} />
        </div>
      </Input>
      <Input>
        <h2>Júlio</h2> julio@gmail.com{' '}
        <div>
          <img src={edit} />
          <img src={delet} />
        </div>
      </Input>
      <Input>
        <h2>Mariana</h2> mariana@gmail.com{' '}
        <div>
          <img src={edit} />
          <img src={delet} />
        </div>
      </Input>
      <Bottom>
        <h3>+ Novo Perfil</h3>
      </Bottom>
    </Container1>
  )
}
export default Administradores
