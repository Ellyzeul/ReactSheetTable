import { ChangeEventHandler, MouseEventHandler, useState } from 'react'
import { TableCellInput } from '../TableCellInput'
import './style.css'
import { TableCellProp } from './types'


const getInitialState = (value: any | {key: any, value: any}[], cellType: string) => 
    cellType === 'input'
    ? value
    : cellType === 'select'
        ? value[0].key
        : ''

export const TableCell = (props: TableCellProp) => {
    const data = props.data
    const cellType = data.cellType || 'input'
    const resizeCoeficient = props.resizeCoeficient || 7.5
    const [value, setValue] = useState(getInitialState(data.value, cellType))
    const [toUpdate, setToUpdate] = useState([] as any[])
    const updateRow = props.updateRow

    const onClick: MouseEventHandler<HTMLTableCellElement> = (event) => {
        const cell = event.target as HTMLTableCellElement
        const element = cell.firstChild as HTMLElement
        if(!element) return

        element.focus()
    }

    return (
        <td 
            className='table_cell' 
            style={{
                width: value.length > 4 ? `${value.length * resizeCoeficient}px` : "30px"
            }}
            onClick={onClick}
        >
            {
                cellType === 'input' 
                ? <TableCellInput 
                    value={value} 
                    setValue={setValue} 
                    toUpdate={toUpdate} 
                    setToUpdate={setToUpdate} 
                    updateRow={updateRow} 
                />
                : <input type="text" onChange={(event) => setValue(event.target.value)} />
            }
        </td>
    )
}
