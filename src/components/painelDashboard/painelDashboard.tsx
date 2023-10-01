import { Global } from '@/assets/global'
import Elipse from '../../assets/painelDashboard/Ellipse 149.png'
import avatar from '../../assets/painelDashboard/avatar.png'
import {
  Container,
  H1,
  H4,
  Span,
  ImageElipse,
  ImageAvatar,
  Container2
} from './stylePainelDashboard'

function PainelDashboard() {
  return (
    <Container>
      <Global />
      <ImageElipse src={Elipse} />
      <ImageAvatar src={avatar} />
      <Container2>
        <Span>cor verde</Span>
        <H1>Seja bem vinda!</H1>
        <H4>
          Neste painel você poderá administrar seu site de forma simples e
          prática.
        </H4>
      </Container2>
    </Container>
  )
}
export default PainelDashboard
