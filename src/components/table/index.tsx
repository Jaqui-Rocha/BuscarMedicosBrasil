import { ReactNode } from 'react'
import * as S from './styleTable'

type TableRow = Record<string, string | number | ReactNode>

type TableProps = {
  columns: string[]
  data: TableRow[]
}

const Table = ({ columns, data }: TableProps) => {
  return (
    <S.Table>
      <S.Header>
        <tr>
          {columns.map(columnText => (
            <S.HeaderData>{columnText}</S.HeaderData>
          ))}
        </tr>
      </S.Header>
      <tbody>
        {data.map(information => (
          <tr>
            {Object.values(information).map(cell => (
              <td>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </S.Table>
  )
}

export default Table
