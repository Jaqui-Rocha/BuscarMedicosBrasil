import styled from 'styled-components'
import { colors } from '@/components/theme'
import { Link, NavLink } from 'react-router-dom'
export const Button = styled(NavLink)`
  width: 20em;
  height: 3em;
  color: ${colors.white};
  background: ${colors.green1};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  padding-left: 1.5em;
  padding-right: 1.5em;
  text-decoration: none;
  margin: 0.5em 0em 0em 0em;
  &:hover,
  :focus {
    background: ${colors.green2};
    color: ${colors.green1};
  }
`
export const Container = styled.div`
  margin: 2em;
`
export const Container1 = styled.div`
  width: 100%;
`
export const Fixed = styled.div`
  position: absolute;
  left: 25em;
  top: 5vh;
`
export const Input = styled.div`
  border-bottom: 4px solid ${colors.gray2};
  display: flex;
  justify-content: space-between;
  width: 30vw;
  margin: 1em 0em 1em 0em;
  align-items: center;
  font-size: 16px;
`
export const Bottom = styled.button`
  color: white;
  background: ${colors.green3};
  width: 12em;
  font-size: 18px;
  height: 3em;
  border: none;
  border-radius: 15px;
  margin-top: 1.5em;
`
