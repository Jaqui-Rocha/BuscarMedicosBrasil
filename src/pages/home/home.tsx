import { useState, useEffect } from 'react'
import PainelDashboard2 from '@/components/painelDashboard/painelDashboard2'
import { Blue, Cabecalho, Container, TableUser } from './styleHome'
import PainelDashboard from '@/components/painelDashboard/painelDashboard'
import PainelDashboard3 from '@/components/painelDashboard/painelDashboard3'
import { TableComponent } from '@/components/table'
import arrowblue from '../../assets/icons/arrowRightSmallBlue.png'
import { getUsers1 } from '@/config/Requisitions'

type UsersRow = {
  firstName: string
  email: string
  phone: string
  profiles: string
}[]
export default function Home() {
  const [users, setUsers] = useState<UsersRow[] | any>([])
  const TableColumns = ['Usuário', 'E-mail', 'WhatsApp', 'Tipo de usuário']

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await getUsers1()
      const formated = result?.reduce((accumulator, currentValue) => {
        const specialty = {
          firstName: currentValue.firstName,
          email: currentValue.email,
          phone: currentValue.phone,
          profiles: currentValue.profiles
        }
        return [...accumulator, specialty]
      }, [] as UsersRow[])
      setUsers(formated ?? [])
    }

    fetchUsers()
  }, [])

  return (
    <>
      <Container>
        <PainelDashboard />
        <div>
          <PainelDashboard2 />
          <PainelDashboard3 />
        </div>
      </Container>
      <TableUser>
        <Cabecalho>
          <h2>Últimos usuários Cadastrados</h2>
          <Blue to="">
            Ver tudo <img src={arrowblue}></img>{' '}
          </Blue>
        </Cabecalho>
        <TableComponent HeadColumns={TableColumns} BodyRow={users} />
      </TableUser>
    </>
  )
}
