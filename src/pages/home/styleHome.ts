import styled from 'styled-components'
import { colors } from '@/components/theme'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  width: 85vw;
`
export const TableUser = styled.div`
  width: 83.5vw;
  box-shadow: 0px 2px 15px 8px ${colors.gray2};
  border-radius: 15px;
  margin-left: 2em;
`
export const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5em 2em 0.5em 2em;

  align-items: center;

  & img {
    vertical-align: middle;
  }
`
export const Blue = styled(Link)`
  color: ${colors.blue};
  font-size: 18px;
  text-decoration: none;
`
