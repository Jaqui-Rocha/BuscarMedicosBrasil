import { useState, useEffect } from 'react'
import { Container1, Input } from './styleProfile'
import { ProfileProps } from '@/config/profile/types'
import { Profile } from '@/config/profile'
import edit from '../../assets/icons/edit.png'
const Dados = () => {
  const [userData, setUserData] = useState<ProfileProps | null>()
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
    <Container1>
      <h1>Dados</h1>
      <Input>
        <h2>Nome</h2>
        <h2>{userData?.firstName}</h2>
        <img src={edit} />
      </Input>
      <Input>
        <h2>E-mail</h2>
        <h2>{userData?.email}</h2>
        <img src={edit} />
      </Input>
    </Container1>
  )
}
export default Dados
