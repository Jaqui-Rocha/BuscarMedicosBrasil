import styled from 'styled-components'
export const Button = styled.button<{ $primary?: boolean }>`
  background: ${props => (props.$primary ? '#046639' : '#00C247')};
  color: ${props =>
    props.$primary
      ? '#FFFFFF'
      : '#FFFFFF'}; //'#FFFFFF';//por que não pega a cor
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: ${props => (props.$primary ? '#046639' : '#00C247')};
  border-radius: 8px;
  height: 56px;
  width: ${props => (props.$primary ? '70%' : '30%')};
  margin-left: ${props => (props.$primary ? '15%' : '60%')};
  margin-right: ${props => (props.$primary ? '15%' : '10%')};
`
