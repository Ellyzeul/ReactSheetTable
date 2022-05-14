import { TableCell } from '../TableCell'
import './style.css'
import { TableProp } from './types'


export const Table = (props: TableProp) => {
    const headers = props.headers
    const data = props.data

    const renderRow = (row: any[], type: string, rowNumber: number = 0) => {
        const rowList = [] as JSX.Element[]
        let id = 0
        row.forEach((cell: any) => rowList.push(
            type === 'head'
            ? <th className='sheet_cell' key={id++}>{cell}</th>
            : type === 'body'
                ? <TableCell data={data[rowNumber][id]} updateRow={updateRow} key={id++} />
                : <td />
        ))

        return rowList
    }

    const renderHeaders = () => renderRow(headers, 'head')

    const renderRows = () => {
        const rowsList = [] as JSX.Element[]
        let id = 0
        data.forEach(row => rowsList.push(
            <tr key={id++}>
                {renderRow(row, 'body', id)}
            </tr>
        ))

        return rowsList
    }

    const updateRow = (data: any[]) => {
        if(data.length !== headers.length) return

        console.log(data)
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    {renderHeaders()}
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}
