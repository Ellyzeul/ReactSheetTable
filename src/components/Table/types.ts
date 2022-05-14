export type TableProp = {
    headers: string[],
    data: {
        value: any | {key: any, value: any}[], 
        cellType?: string
    }[][]
}