import { OutputRow } from "../types"

export type TableCellInputProp = {
    cell: number | string,
    updateRow: (row: OutputRow) => void
}
