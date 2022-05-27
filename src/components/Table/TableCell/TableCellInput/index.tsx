import { ChangeEventHandler, FocusEventHandler, KeyboardEventHandler, useEffect, useState } from 'react'
import "./style.css"
import { TableCellInputProp } from './types'
import { OutputRow } from '../types'


export const TableCellInput = (props: TableCellInputProp) => {
    const { cell, header, updateRow } = props
    const [value, setValue] = useState(cell)
    const [initialValue, setInitialValue] = useState(value)
    const [toUpdate, setToUpdate] = useState({} as OutputRow)

    const onFocus: FocusEventHandler<HTMLInputElement> = (event)=> {
        setInitialValue(value)
    }

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

        if(key === 'Enter') {
            input.blur()
            return
        }
        if(key === 'Escape') {
            const newToUpdate = toUpdate
            newToUpdate[header] = `${initialValue}`
            setToUpdate(newToUpdate)
            setValue(initialValue)

            input.blur()
            return
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
            onFocus={onFocus} 
            onChange={onChange} 
            onKeyDown={onKeyDown} 
            onBlur={onBlur} 
        />
    )
}
