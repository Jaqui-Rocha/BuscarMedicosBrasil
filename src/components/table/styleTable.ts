import styled from 'styled-components'
import { colors } from '../theme'

export const Table = styled.table`
  border-collapse: collapse;
  margin-left: 5em;
  width: 70vw;
  //justify-content: center;
  //align-items: center;

  th:first-child {
    border-radius: 16px 0px 0px 0px;
  }

  th:last-child {
    border-radius: 0px 16px 0px 0px;
  }
`

export const Header = styled.thead`
  /* background-color: #046639; */
  color: white;
  background: ${colors.green1};
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 600;
`

export const HeaderData = styled.th`
  padding: 24px 32px;
`
