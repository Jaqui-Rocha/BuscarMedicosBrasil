import { colors } from '../theme'
import { Circle, ImageIcon } from './componentsIcons/styleComponentsIcons'
import users from '../../assets/icons/user.png'
import { ContainerDash2, DisplayFlex, Gap } from './stylepainelDashboard2'
import { PropsDashbord } from '../../config/Requisitions/types'
import { getDashboard } from '@/config/Requisitions'
import { useState, useEffect } from 'react'
const PainelDashboard2: React.FC = () => {
  const [data, setData] = useState<PropsDashbord | null>()

  useEffect(() => {
    async function PainelDashboard() {
      try {
        const resposta = await getDashboard()
        if (resposta?.data.doctor) {
          setData(resposta?.data)
          console.log(resposta.data)
        }
      } catch (error) {
        console.log('Erro', error)
      }
    }
    PainelDashboard()
  }, [])
  return (
    <ContainerDash2 color={colors.white}>
      <h2>Médicos</h2>
      <DisplayFlex>
        <DisplayFlex>
          <Circle color={colors.blue}>
            <ImageIcon src={users} />
          </Circle>
          <Gap>
            <h4>Total</h4>
            <h1>{data?.doctor.total}</h1>
          </Gap>
        </DisplayFlex>
        <DisplayFlex>
          <Circle color={colors.green3}>
            <ImageIcon src={users} />
          </Circle>
          <Gap>
            <h4>Disponíveis</h4>
            <h1>{data?.doctor.available}</h1>
          </Gap>
        </DisplayFlex>
        <DisplayFlex>
          <Circle color={colors.red}>
            <ImageIcon src={users} />
          </Circle>
          <Gap>
            <h4>Indisponíveis</h4>
            <h1>{data?.doctor.unavailable}</h1>
          </Gap>
        </DisplayFlex>
      </DisplayFlex>
    </ContainerDash2>
  )
}
export default PainelDashboard2
