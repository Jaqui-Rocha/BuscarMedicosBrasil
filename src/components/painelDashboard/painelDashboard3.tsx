import { colors } from '../theme'
import { Circle, ImageIcon } from './componentsIcons/styleComponentsIcons'
import users from '../../assets/icons/user.png'
import { ContainerDash2, DisplayFlex, Gap } from './stylepainelDashboard2'

const PainelDashboard3 = () => {
  return (
    <ContainerDash2 color={colors.white}>
      <h2>Contratantes</h2>
      <DisplayFlex>
        <DisplayFlex>
          <Circle color={colors.blue}>
            <ImageIcon src={users} />
          </Circle>
          <Gap>
            <h4>Total</h4>
            <h1>1000</h1>
          </Gap>
        </DisplayFlex>
        <DisplayFlex>
          <Circle color={colors.green3}>
            <ImageIcon src={users} />
          </Circle>
          <Gap>
            <h4>Ativos</h4>
            <h1>900</h1>
          </Gap>
        </DisplayFlex>
        <DisplayFlex>
          <Circle color={colors.red}>
            <ImageIcon src={users} />
          </Circle>
          <Gap>
            <h4>Inativos</h4>
            <h1>100</h1>
          </Gap>
        </DisplayFlex>
      </DisplayFlex>
    </ContainerDash2>
  )
}
export default PainelDashboard3
