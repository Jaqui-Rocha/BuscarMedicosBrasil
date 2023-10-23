import styled from 'styled-components'
import { colors } from '../theme'

export const Table = styled.table`
  border-collapse: collapse;
  margin: 0em 1.5em 0em 1.5em;
  width: 77.2vw;

  th:first-child {
    border-radius: 16px 0px 0px 0px;
  }

  th:last-child {
    border-radius: 0px 16px 0px 0px;
  }
  th,
  td {
    text-align: left;
  }
  tr,
  td {
    padding-left: 2em;
  }
  td {
    background-color: ${colors.gray1};
  }
`

export const Header = styled.thead`
  color: white;
  background: ${colors.green1};
`

export const HeaderData = styled.th`
  padding: 24px 32px;
`
