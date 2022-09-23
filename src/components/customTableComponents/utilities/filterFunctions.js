export const searchFilter = () => {
    console.log('This is a search')
}

export const filterColumn = (rowsArr, colField, filterType, filterInput) => {
    let filteredArr;
    switch (filterType) {
        case 'equal':
            filteredArr = rowsArr.filter((row) => row[colField] = filterInput)
            break;
        case 'lessThan':
            filteredArr = rowsArr.filter((row) => row[colField] < filterInput)
            break;
        case 'lessThanOrEqual':
            filteredArr = rowsArr.filter((row) => row[colField] <= filterInput)
            break;
        case 'greaterThan':
            filteredArr = rowsArr.filter((row) => row[colField] > filterInput)
            break;
        case 'greaterThanOrEqual':
            filteredArr = rowsArr.filter((row) => row[colField] >= filterInput)
            break;
        default:
            break;
    }
    return filteredArr;
}