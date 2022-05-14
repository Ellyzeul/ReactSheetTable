import { ChangeEventHandler, KeyboardEventHandler, MouseEventHandler, useState } from 'react'
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
        const input = cell.firstChild as HTMLInputElement
        if(!input) return

        input.focus()
    }

    const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const input = event.target
        const row = input.parentElement?.parentElement as HTMLTableRowElement
        const toUpdate = [] as any[]

        setValue(input.value)
        
        row.childNodes.forEach(cell => toUpdate.push((cell.firstChild as HTMLInputElement).value))

        setToUpdate(toUpdate)
    }

    const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
        const key = event.key
        const input = event.target as HTMLInputElement

        if(key === 'Enter' || key === 'Escape') {
            input.blur()
        }
    }

    const onBlur = () => {
        updateRow(toUpdate)
        setToUpdate([] as any[])
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
                <input 
                value={value} 
                onClick={() => null} 
                onChange={onChange} 
                onKeyDown={onKeyDown} 
                onBlur={onBlur} 
            />}
        </td>
    )
}
