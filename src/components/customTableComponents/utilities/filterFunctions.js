export const searchFilter = (rowsArr, searchInput) => {
    console.log(`This is a search for ${searchInput}`);
    console.log(rowsArr);
    // create regex to scan for searchInput, ignoring casing
    const regexp = new RegExp(searchInput, 'i');
    let filteredArr;
    // console.log(rowsArr);
    filteredArr = rowsArr.filter((row) => regexp.test(Object.values(row)));
    return filteredArr;
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