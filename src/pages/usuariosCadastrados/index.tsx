import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { PropsUsers } from '@/config/Requisitions/types'
import 'react-tabs/style/react-tabs.css'
import { Container, Tab1, Tamanho, H1, Body } from './styled'
import { useState, useEffect } from 'react'
import { getUsers } from '@/config/Requisitions'

import { AiOutlineSearch } from 'react-icons/ai'
import {
  Centralizar,
  Search,
  Search1,
  Div
} from '../Specialties/styleSpecialties'
;('./styleSpecialties')
type Props = 'todos' | 'contratantes' | 'medicos'
export default function UsuarioCadastrado() {
  const [data, setData] = useState<PropsUsers>()
  useEffect(() => {
    async function usuarioCadastrado() {
      try {
        const resposta = await getUsers()
        console.log(resposta)
        // if (data === resposta.content) {
        //   setData(data)
        //   console.log(resposta?.content)
        // }
      } catch (error) {
        console.log('Erro', error)
      }
    }
    usuarioCadastrado()
  }, [])
  return (
    <Container>
      <H1>Usuários Cadastrados | </H1>

      <Tabs>
        <TabList>
          <Tab>
            <h3>Todos</h3>
          </Tab>
          <Tab>
            <h3>Contratantes</h3>
          </Tab>
          <Tab>
            <h3>Médicos</h3>
          </Tab>
        </TabList>

        <TabPanel>
          <Tamanho>
            <Body>
              <Centralizar>
                <Search placeholder="Pesquise uma palavra-chave" />
                <Search1>
                  <AiOutlineSearch />
                </Search1>
                <div>
                  <p>Total de usuários</p>
                  <h3>1.200</h3>
                </div>
              </Centralizar>
              <h2>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit,
                consequuntur nostrum nesciunt at amet ut ratione quam aliquid
                itaque inventore eius laudantium ipsa necessitatibus. Eius quo
                aliquam explicabo assumenda error!
                {data?.content.lastName}
              </h2>
            </Body>
          </Tamanho>
        </TabPanel>
        <TabPanel>
          <Body>
            <h2>Any content 2</h2>
          </Body>
        </TabPanel>
        <TabPanel>
          <Body>
            <h2>Any content 3</h2>
          </Body>
        </TabPanel>
      </Tabs>
    </Container>
  )
}
