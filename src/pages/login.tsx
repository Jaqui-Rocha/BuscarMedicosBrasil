import { useState } from 'react'
import Input from '@/components/ui/uiForm/input'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { Container, Global, BemVindo } from '@/assets/global'
import { backGroundImage } from '@/components/loginComponents/style'
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  ButtonGroup
} from '@mui/material'
import styleInput from '@/components/ui/uiForm/styleInput'
import StyleInput from '@/components/ui/uiForm/styleInput'
import { StyleCheck } from '@/components/ui/uiForm/styleMaterial'
import { Button } from '@/components/ui/uiForm/button'
import { useNavigate } from 'react-router-dom'
function PageLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const Navigate = useNavigate()
  const handlePage = () => {
    Navigate('/home')
  }
  return (
    <>
      {/* <backGroundImage /> */}
      <Container>
        <BemVindo>
          <p>Seja bem vindo!</p>
          <h1>Realize seu Login</h1>
        </BemVindo>
        <Input
          id="email"
          label="Email"
          type="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
          hasError={!emailRegex.test(email)}
          placeholder="Insira seu Email"
        />
        <Input
          id="password"
          label="Senha"
          type={showPassword ? 'text' : 'password'}
          onChange={e => setPassword(e.target.value)}
          value={password}
          icon={showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          onIcon={() => setShowPassword(!showPassword)}
          placeholder="Insira sua Senha"
        />
        <StyleCheck>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Lembrar-me"
            />{' '}
          </FormGroup>
          Esqueci minha senha
        </StyleCheck>
        <Button $primary onClick={handlePage}>
          Entrar
        </Button>
      </Container>
      <Global />
    </>
  )
}
export default PageLogin
