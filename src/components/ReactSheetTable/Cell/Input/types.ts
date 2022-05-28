import { OutputRow } from "../types"

export type TableCellInputProp = {
    header: string,
    cell: number | string,
    updateRow: (row: OutputRow) => void
}
