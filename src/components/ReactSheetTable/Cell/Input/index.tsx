import { ChangeEventHandler, FocusEventHandler, KeyboardEventHandler, useState } from 'react'
import "./style.css"
import { TableCellInputProp } from './types'
import { OutputRow } from '../types'


export const Input = (props: TableCellInputProp) => {
    const { cell, header, updateRow } = props
    const [value, setValue] = useState(cell)
    const [initialValue, setInitialValue] = useState(value)
    const [toUpdate, setToUpdate] = useState({} as OutputRow)

    const onFocus: FocusEventHandler<HTMLInputElement> = ()=> {
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

    const getTextWidth = (text: string, font: string) => {
        const canvas = getTextWidth.canvas
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
        ctx.font = font
        const width = ctx?.measureText(text).width * 0.85 as number

        return `${width}px`
    }
    getTextWidth.canvas = document.createElement('canvas') as HTMLCanvasElement

    const getCssStyle = (element: HTMLElement, prop: string) => {
        return window.getComputedStyle(element, null).getPropertyValue(prop);
    }
    
    const getCanvasFontSize = (el = document.body) => {
      const fontWeight = getCssStyle(el, 'font-weight') || 'normal';
      const fontSize = getCssStyle(el, 'font-size') || '12px';
      const fontFamily = getCssStyle(el, 'font-family') || 'Helvetica';
      
      return `${fontWeight} ${fontSize} ${fontFamily}`;
    }

    return (
        <input 
            className='table_cell_input'
            style={{
                minWidth: '20px',
                width: getTextWidth(value as string, getCanvasFontSize())
            }}
            value={value} 
            onFocus={onFocus} 
            onChange={onChange} 
            onKeyDown={onKeyDown} 
            onBlur={onBlur} 
        />
    )
}
