import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavLink = styled(Link)`
  background: #046639;
  color: white;
  border: none;
  border-radius: 8px;
  height: 2.5em;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1em;
  width: 90%;
  text-decoration: none;
  gap: 3px;

  &:hover,
  :focus {
    color: #046639;
    background-color: #b4e08e;

    path {
      stroke: #046639;
    }
  }
`
export const Container = styled.div`
  background: #046639;
  width: 15vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.5vh;
  gap: 0.5em;
`
export const Image = styled.img`
  size: 100%;
`

export const Dashboard = styled.div`
  fill: #fff;
  stroke: #046639;
  &:hover:focus {
    fill: #040404;
    stroke: #fff;
  }
`
export const UsuariosCadastrados = styled.div`
  fill: #fff;

  &:hover:focus {
    fill: #040404;
    path {
      stroke: #046639;
    }
  }
`
