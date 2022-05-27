import { KeyValue } from "../types"

export type TableCellProp = {
    cell: number | string | KeyValue[],
    header: string,
    updateRow: (row: OutputRow) => void,
    resizeCoeficient?: number
}

export interface OutputRow {
    id: number | string,
    [key: number | string]: number| string
}
