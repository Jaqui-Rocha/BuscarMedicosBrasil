import { ReactElement } from 'react'
import Style from './styleInput'
interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string
  id: string
  hasError?: boolean
  icon?: ReactElement
  onIcon?: () => void
}
export default function Input({
  label,
  id,
  hasError,
  icon,
  onIcon,
  ...props
}: Props) {
  const classis = [
    props.value ? 'active' : '',
    hasError && props.value ? 'error' : ''
  ]
  return (
    <Style.Div className={classis.join(' ')}>
      <Style.Input {...props} id={id} />
      <Style.Label htmlFor={id}>{label}</Style.Label>
      {icon && <Style.Icon onClick={onIcon}>{icon}</Style.Icon>}
    </Style.Div>
  )
}
