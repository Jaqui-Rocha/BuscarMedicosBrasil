import styled from 'styled-components'
export const Container = styled.div<{ $primary?: boolean }>`
  width: ${props => (props.$primary ? '85%' : '30%')};
  height: 10vh;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3vw;
  padding-right: 3vw;
  box-shadow: 0px 0px 5px gray;
`
