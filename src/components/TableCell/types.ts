export type TableCellProp = {
    data: {
        value: any | {key: any, value: any}[], 
        cellType?: string
    },
    updateRow: (data: any[]) => void,
    resizeCoeficient?: number
}