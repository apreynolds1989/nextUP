export const searchFilter = () => {
    console.log('This is a search')
}

export const filterColumn = (rowsArr, colField, filterType, filterInput) => {
    let filteredArr;
    switch (filterType) {
        case '=':
            filteredArr = rowsArr.filter((row) => row[colField] = filterInput)
            break;
        case '<':
            filteredArr = rowsArr.filter((row) => row[colField] < filterInput)
            break;
        case '<=':
            filteredArr = rowsArr.filter((row) => row[colField] <= filterInput)
            break;
        case '>':
            filteredArr = rowsArr.filter((row) => row[colField] > filterInput)
            break;
        case '>=':
            filteredArr = rowsArr.filter((row) => row[colField] >= filterInput)
            break;
        default:
            break;
    }
    return filteredArr;
}