import { ReactNode } from 'react'
import { Table } from './styleTable'

type TableRow = Record<string, string | number | Array<string> | ReactNode>

type TableProps = {
  HeadColumns: string[]
  BodyRow: TableRow[]
}

export const TableComponent = ({ HeadColumns, BodyRow }: TableProps) => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            {HeadColumns.map((columnText, index) => (
              <th key={`${index}-th`}>{columnText}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {BodyRow.map((information, index) => {
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
