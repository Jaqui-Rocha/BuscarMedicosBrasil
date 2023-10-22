import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import close from '../../../assets/icons/close.png'
import { ProfileProps } from '@/config/profile/types'
import { colors } from '@/components/theme'
import { deleteSpecialties, getSpecialties } from '@/config/Requisitions'
import { isAxiosError } from 'axios'

const Red = styled(Link)`
  color: red;
`
const Container = styled.div`
  width: 593px;
  height: 388px;
  //z-index: 0;
  border: 1px solid gray;
  border-radius: 15px;
  padding: 5em;
  padding-top: 2em;
  align-items: center;
  margin-left: 50%;
  display: flex;
  flex-direction: column;
  position: fixed;
  // right: 35em;
  left: 50%;
  top: 50%;
  background: ${colors.white};
  display: hidden;
`
const Fechar = styled(Link)`
  margin-left: 28em;
  margin-bottom: 1em;
`
const H3 = styled.h2`
  margin-top: 25px;
  width: 320px;
  align-items: center;
  justify-content: center;
`
const Buttom = styled.button`
  width: 17em;
  height: 5em;
  padding: 1em;
  padding-bottom: 1em;
  background: ${colors.green3};
  color: ${colors.white};
  text-decoration: none;
  border-radius: 10px;
  border: none;
  margin: 3em;
`
// const fetchDelete = async () => {
//   const result = await deleteSpecialties()

//   return result
// }

export default function ModalDelete({ id }: { id: number }) {
  const [invisible, setVisible] = useState(false)
  const [userData, setUserData] = useState<ProfileProps | null>()
  const FecharModal = (toggleVisible: boolean) => {
    console.log(toggleVisible)
    if (toggleVisible === true) {
      return
    }
    return true
  }

  async function DeletarSpecialties() {
    try {
      const data = await deleteSpecialties(id)
      if (data) {
        setUserData(data)
        console.log(data)
        return userData
      }
    } catch (error) {
      console.log('Erro', error)
    }
  }

  return (
    <>
      <Container>
        <Fechar to="" onClick={() => {}}>
          <img src={close} />
        </Fechar>

        <H3>Tem certeza que deseja</H3>
        <h2>
          <Red to=""> excluir </Red> este item?
        </h2>

        <Buttom
          type="submit"
          color={colors.green1}
          onClick={DeletarSpecialties}
        >
          <h3>sim, excluir item</h3>
        </Buttom>

        <Link to="">voltar</Link>
      </Container>
    </>
  )
}
