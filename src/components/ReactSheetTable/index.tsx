import './style.css'
import { Cell } from './Cell'
import { OutputRow } from './Cell/types'
import { ReactSheetTableRow, ReactSheetTableProp } from './types'


export const ReactSheetTable = (props: ReactSheetTableProp) => {
    const { headers, rows } = props

    const renderHeader = () => {
        return headers.map((header, index) => <th className='sheet_cell' key={index}>{header}</th>)
    }

    const renderRows = () => {
        return rows.map((row, index) => <tr id={row.id as string} key={index}>{renderRow(row)}</tr>)
    }

    const renderRow = (row: ReactSheetTableRow) => {
        const cellList = []
        for (const cell in row) {
            if(cell === 'id') continue
            cellList.push({
                header: cell,
                row: row[cell],
            })
        }

        return cellList.map((cell, index) => <Cell cell={cell.row} header={cell.header} updateRow={updateRow} key={index} />)
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
