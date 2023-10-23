import { ReactNode } from 'react'
import { Table, Header, HeaderData } from './styleTable'
//type TableRow = Record<string, string | number | Array<string> | ReactNode>

type HeadColumns = {}
type TableProps = {
  HeadColumns: string[]
  BodyRow: string[] | number | ReactNode
}

export const TableComponent = ({ HeadColumns, BodyRow }: TableProps) => {
  return (
    <>
      <Table>
        <Header>
          <tr>
            {HeadColumns.map((columnText, index) => (
              <HeaderData key={`${index}-th`}>{columnText}</HeaderData>
            ))}
          </tr>
        </Header>
        <tbody>
          {BodyRow.map((BodyRow, index) => {
            return (
              <>
                <tr key={`${index}-tr`}>
                  {BodyRow.map((cell, index) => (
                    <>
                      <td key={`${index}-td`}>{cell}</td>
                    </>
                  ))}
                </tr>
              </>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}
