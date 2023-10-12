import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import 'react-tabs/style/react-tabs.css'
import { Container, Tab1, Tamanho, H1, Body } from './styled'

export default function UsuarioCadastrado() {
  return (
    <Container>
      <H1>Usuários Cadastrados |</H1>
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
              <h2>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit,
                consequuntur nostrum nesciunt at amet ut ratione quam aliquid
                itaque inventore eius laudantium ipsa necessitatibus. Eius quo
                aliquam explicabo assumenda error!
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
