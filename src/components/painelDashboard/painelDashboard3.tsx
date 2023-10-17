import { colors } from '../theme'
import { Circle, ImageIcon } from './componentsIcons/styleComponentsIcons'
import userSearch1 from '../../assets/icons/userSearch1.png'
import { ContainerDash2, DisplayFlex, Gap } from './stylepainelDashboard2'
import { getDashboard } from '@/config/Requisitions'
import { useState, useEffect } from 'react'
import { PropsDashbord } from '@/config/Requisitions/types'
const PainelDashboard3 = () => {
  const [data, setData] = useState<PropsDashbord | null>()

  useEffect(() => {
    async function PainelDashboard() {
      try {
        const resposta = await getDashboard()
        if (resposta?.data.constructor) {
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
      <h2>Contratantes</h2>
      <DisplayFlex>
        <DisplayFlex>
          <Circle color={colors.yellow}>
            <ImageIcon src={userSearch1} />
          </Circle>
          <Gap>
            <h4>Total</h4>
            <h1>{data?.contractor.total}</h1>
          </Gap>
        </DisplayFlex>
        <DisplayFlex>
          <Circle color={colors.green3}>
            <ImageIcon src={userSearch1} />
          </Circle>
          <Gap>
            <h4>Ativos</h4>
            <h1>{data?.contractor.available}</h1>
          </Gap>
        </DisplayFlex>
        <DisplayFlex>
          <Circle color={colors.red}>
            <ImageIcon src={userSearch1} />
          </Circle>
          <Gap>
            <h4>Inativos</h4>
            <h1>{data?.contractor.unavailable}</h1>
          </Gap>
        </DisplayFlex>
      </DisplayFlex>
    </ContainerDash2>
  )
}
export default PainelDashboard3
