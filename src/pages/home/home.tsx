import PainelDashboard2 from '@/components/painelDashboard/painelDashboard2'
import { Container } from './styleHome'

import PainelDashboard from '@/components/painelDashboard/painelDashboard'
import PainelDashboard3 from '@/components/painelDashboard/painelDashboard3'

export default function Home() {
  return (
    <>
      <Container>
        <PainelDashboard />
        <div>
          <PainelDashboard2 />
          <PainelDashboard3 />
        </div>
      </Container>
      <PainelDashboard2 />
    </>
  )
}
