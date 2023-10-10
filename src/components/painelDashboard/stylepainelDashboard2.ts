import styled from 'styled-components'
export const ContainerDash2 = styled.div<{ color: string }>`
  background: ${({ color }) => color};
  width: 47vw;
  box-shadow: 1px 1px 5px gray;
  //border: 2px solid black;
  border-radius: 18px;
  padding: 1.5em;
  padding-bottom: 1em;
  margin-top: 2em;
  margin-bottom: 2em;
  > h2 {
    margin-bottom: 1em;
  }
`
export const DisplayFlex = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Gap = styled.div`
  gap: 2em;
  margin-left: 1em;
`
