import './style.css'
import { TableCell } from './TableCell'
import { OutputRow } from './TableCell/types'
import { ITableRow, TableProp } from './types'


export const Table = (props: TableProp) => {
    const { headers, rows } = props

    const renderHeader = () => {
        return headers.map((header, index) => <th className='sheet_cell' key={index}>{header}</th>)
    }

    const renderRows = () => {
        return rows.map((row, index) => <tr id={row.id as string} key={index}>{renderRow(row)}</tr>)
    }

    const renderRow = (row: ITableRow) => {
        const cellList = []
        for (const cell in row) {
            if(cell === 'id') continue
            cellList.push({
                header: cell,
                row: row[cell],
            })
        }

        return cellList.map((cell, index) => <TableCell cell={cell.row} header={cell.header} updateRow={updateRow} key={index} />)
    }


    const updateRow = (row: OutputRow) => {
        if(Object.keys(row).length !== headers.length + 1) return

        console.log(row)
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    {renderHeader()}
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}
