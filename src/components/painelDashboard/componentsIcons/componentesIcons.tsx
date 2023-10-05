import UsuariosCadastrados from '@/components/Icons/usuariosCadastrados'
import { Circle, StyleUsuariosCadastrados } from './styleComponentsIcons'
const StyleGreen = {
  border: 'none',
  background: '#00C247'
}
const StyleRed = {
  border: 'none',
  background: '#FF3333'
}
type Props = {
  variant: 'azul' | 'verde' | 'vermelho'
  onClick: () => void
  //UsuariosCadastrados: JSX.Element
}
const trocarCor = (variant: 'azul' | 'verde' | 'vermelho') => {
  if (variant === 'vermelho') {
    return StyleRed
  }
  if (variant === 'verde') {
    return StyleGreen
  }
  return {}
}
const ComponentsIcons = ({
  variant,
  StyleUsuariosCadastrados,
  onClick
}: Props) => {
  return (
    <div>
      <span>Total</span>
      <Circle style={trocarCor(variant)} onClick={onClick} />

      <StyleUsuariosCadastrados />
    </div>
  )
}
export default ComponentsIcons

// const Button = ({ variant, children, onClick }: Props) => (
//   <button style={getStyle(variant)} onClick={onClick}>
//     {children}
//   </button>
// )

//export default Button
