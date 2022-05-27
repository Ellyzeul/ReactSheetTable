import { KeyValue } from "../../types";
import { OutputRow } from "../types";

export interface TableCellSelectProp {
    cell: KeyValue[],
    updateRow: (row: OutputRow) => void
}
