import { MouseEventHandler } from 'react'
import { TableCellInput } from './TableCellInput'
import { TableCellSelect } from './TableCellSelect'
import './style.css'
import { TableCellProp } from './types'
import { KeyValue } from '../types'


export const TableCell = (props: TableCellProp) => {
    const { cell, header, updateRow  } = props

    const onClick: MouseEventHandler<HTMLTableCellElement> = (event) => {
        const cell = event.target as HTMLTableCellElement
        const element = cell.firstChild as HTMLElement
        if(!element) return
        if(element.nodeName === '#text') return

        element.focus()
    }

    function renderCell(cell: string | number | KeyValue[]) {
        if (typeof cell === 'string' || typeof cell === 'number') {
            return <TableCellInput cell={cell} header={header} updateRow={updateRow} />
        }
        if (Array.isArray(cell)) {
            return <TableCellSelect cell={cell} updateRow={updateRow} />
        }

        return <TableCellInput cell={""} header={header} updateRow={updateRow} />
    }

    return (
        <td 
            className='table_cell' 
            headers={header}
            onClick={onClick}
        >   
            {renderCell(cell)}
        </td>
    )
}
