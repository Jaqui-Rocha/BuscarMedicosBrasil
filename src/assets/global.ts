import styled, { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
*, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  //background:green;
  font-family: 'Poppins', sans-serif;

}


`
export const StyleHome = styled.div`
  display: flex;
`
export const BemVindo = styled.div`
  font-family: 'Sora', sans-serif;
  margin-left: 6.5rem;
  margin-top: 6rem;
  margin-bottom: 3rem;
  font-size: 24px;
`

export const Container = styled.div`
  //width: 100%;
  margin: 45px auto 0;
  border: 1px solid black;
  border-radius: 20px;
  background: white;
  width: 40vw;
  height: 80vh;
`
