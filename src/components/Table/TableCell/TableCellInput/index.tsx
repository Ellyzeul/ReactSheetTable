import { ChangeEventHandler, KeyboardEventHandler, useState } from 'react'
import "./style.css"
import { TableCellInputProp } from './types'
import { OutputRow } from '../types'


export const TableCellInput = (props: TableCellInputProp) => {
    const { cell, updateRow } = props
    const [value, setValue] = useState(cell)
    const [toUpdate, setToUpdate] = useState({} as OutputRow)

    const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const input = event.target
        const row = input.parentElement?.parentElement as HTMLTableRowElement
        const newToUpdate = toUpdate

        setValue(input.value)
        
        newToUpdate.id = row.id
        row.childNodes.forEach((cell) => {
            const td = cell as HTMLTableCellElement
            const input = td.firstChild as HTMLInputElement
            newToUpdate[td.headers] = input.value
        })

        setToUpdate(newToUpdate)
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
        setToUpdate({} as OutputRow)
    }

    return (
        <input 
            className='table_cell_input'
            value={value} 
            onClick={() => null} 
            onChange={onChange} 
            onKeyDown={onKeyDown} 
            onBlur={onBlur} 
        />
    )
}
