import { colors } from '@/components/theme'
import styled from 'styled-components'
export const Button = styled.button<{ $primary?: boolean }>`
  background: ${props => (props.$primary ? '#046639' : '#00C247')};
  color: ${colors.white};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: ${props => (props.$primary ? '#046639' : '#00C247')};
  border-radius: 12px;
  height: 3em;
  width: ${props => (props.$primary ? '70%' : '20%')};
  margin-left: ${props => (props.$primary ? '15%' : '0%')};
  margin-right: ${props => (props.$primary ? '15%' : '0%')};
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`
