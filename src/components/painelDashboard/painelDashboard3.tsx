import { colors } from '../theme'
import { Circle, ImageIcon } from './componentsIcons/styleComponentsIcons'
import userSearch1 from '../../assets/icons/userSearch1.png'
import { ContainerDash2, DisplayFlex, Gap } from './stylepainelDashboard2'

const PainelDashboard3 = () => {
  return (
    <ContainerDash2 color={colors.white}>
      <h2>Contratantes</h2>
      <DisplayFlex>
        <DisplayFlex>
          <Circle color={colors.yellow}>
            <ImageIcon src={userSearch1} />
          </Circle>
          <Gap>
            <h4>Total</h4>
            <h1>1000</h1>
          </Gap>
        </DisplayFlex>
        <DisplayFlex>
          <Circle color={colors.green3}>
            <ImageIcon src={userSearch1} />
          </Circle>
          <Gap>
            <h4>Ativos</h4>
            <h1>900</h1>
          </Gap>
        </DisplayFlex>
        <DisplayFlex>
          <Circle color={colors.red}>
            <ImageIcon src={userSearch1} />
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
