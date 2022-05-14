export type TableCellInputProp = {
    value: any
    setValue: React.Dispatch<any>
    toUpdate: any[],
    setToUpdate: React.Dispatch<React.SetStateAction<any[]>>,
    updateRow: (data: any[]) => void
}