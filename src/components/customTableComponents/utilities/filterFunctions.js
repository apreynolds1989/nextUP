export const searchFilter = () => {
    console.log('This is a search')
}

export const filterColumnGreaterThan = (rowsArr, colField, filterInput) => {
    const filteredArr = rowsArr.filter((row) => row[colField] > filterInput)
    return filteredArr;
}