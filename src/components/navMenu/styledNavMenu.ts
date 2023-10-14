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
export const ImgProfile = styled.img`
  position: absolute;
  right: 1.5em;
  z-index: 1;
`
export const ImgUser = styled.img`
  position: absolute;
  right: 3em;
  top: 9em;
  z-index: 2;
`
export const ImgLogout = styled.img`
  position: absolute;
  right: 3em;
  top: 13em;
  z-index: 2;
`
export const Imglinha = styled.img`
  position: absolute;
  right: 3em;
  top: 11.5em;
  z-index: 2;
`
