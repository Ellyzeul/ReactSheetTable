import { ChangeEventHandler, KeyboardEventHandler } from 'react'
import "./style.css"
import { TableCellInputProp } from './types'


export const TableCellInput = (props: TableCellInputProp) => {
    const value = props.value
    const setValue = props.setValue
    const toUpdate = props.toUpdate
    const setToUpdate = props.setToUpdate
    const updateRow = props.updateRow

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
        <input 
            value={value} 
            onClick={() => null} 
            onChange={onChange} 
            onKeyDown={onKeyDown} 
            onBlur={onBlur} 
        />
    )
}
