export interface ReactSheetTableProp {
    headers: string[],
    rows: ReactSheetTableRow[]
}

export interface ReactSheetTableRow{
  id: number| string,
  [key: string]: number | string | KeyValue[]
}

export interface KeyValue {
  key: number | string,
  value: number | string
}
