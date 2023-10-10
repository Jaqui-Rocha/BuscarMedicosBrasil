import styled from 'styled-components'
export const Container = styled.div<{ $primary?: boolean }>`
  width: ${props => (props.$primary ? '100%' : '30%')};
  /* width: 85vw; */
  height: 10vh;
  border: none;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3vw;
  padding-right: 3vw;
  box-shadow: 0px 0px 5px gray;
`
export const Base = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`
