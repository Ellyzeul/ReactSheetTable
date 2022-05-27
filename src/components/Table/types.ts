export interface TableProp {
    headers: string[],
    rows: ITableRow[]
}

export interface ITableRow{
  id: number| string,
  [key: string]: number | string | KeyValue[]
}

export interface KeyValue {
  key: number | string,
  value: number | string
}
