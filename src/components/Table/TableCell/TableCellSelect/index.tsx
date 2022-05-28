import { ChangeEventHandler, useState } from 'react'
import { KeyValue } from '../../types'
import { OutputRow } from '../types'
import './style.css'
import { TableCellSelectProp } from './types'


export const TableCellSelect = (props: TableCellSelectProp) => {
    const { cell, updateRow } = props
    const [value, setValue] = useState(cell[0].key)
    const [toUpdate, setToUpdate] = useState({} as OutputRow)

    const renderOptions = (options: KeyValue[]) => {
        return options.map((option, index) => <option key={index} value={option.key} onClick={onClick}>{option.value}</option>)
    }

    const onChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
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

    const sendUpdate = () => {
        updateRow(toUpdate)
        setToUpdate({} as OutputRow)
    }

    const onBlur = () => {
        sendUpdate()
    }

    const onClick = () => {
        sendUpdate()
    }

    return (
        <select 
            className='table_cell_select'
            value={value}
            onChange={onChange}
            onBlur={onBlur}
        >
            {renderOptions(cell)}
        </select>
    )
}
