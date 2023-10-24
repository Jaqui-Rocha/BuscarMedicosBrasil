import { ReactNode } from 'react'
import { Table, Header, HeaderData } from './styleTable'
type TableRow = Record<string, ReactNode[] | Array<string> | ReactNode>

type HeadColumns = {}
type TableProps = {
  HeadColumns: string[]
  BodyRow?: TableRow[]
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
          {BodyRow?.map((information, index) => {
            return (
              <>
                <tr key={`${index}-tr`}>
                  {Object.values(information).map((cell, index) => (
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
