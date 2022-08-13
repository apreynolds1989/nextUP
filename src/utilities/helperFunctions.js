export const sortCol = (rowsArr, colField, primarySort, isAsc) => {
    if (primarySort === '' || primarySort === colField) {
        return sortPrimary(rowsArr, colField, isAsc);
    } else {
        return sortSecondary(rowsArr, colField, primarySort, isAsc);
    }
};

export const sortPrimary = (rowsArr, colField, isAsc) => {
    let switchHappened, cellA, cellB, shouldSwitch;
    let copiedArr = [...rowsArr];
    switchHappened = true;
    while (switchHappened) {
        // start by stating no switchHappened
        switchHappened = false;
        // Loop through each table body row
        for (let i = 0; i < copiedArr.length - 1; i++) {
            // Compare the next two elements in the loop
            cellA = copiedArr[i];
            cellB = copiedArr[i + 1];
            shouldSwitch = isAsc ?
                checkSortAsc(cellA, cellB, colField) :
                checkSortDesc(cellA, cellB, colField);
            if (shouldSwitch) {
                swapArrElements(copiedArr, i);
                switchHappened = true;
            }
        }
    }
    return copiedArr;
};

const sortSecondary = (rowsArr, colField, primarySort, isAsc) => {
    let switchHappened, cellA, cellB, shouldSwitch;
    let copiedArr = [...rowsArr];
    switchHappened = true;
    while (switchHappened) {
        // start by stating no switchHappened
        switchHappened = false;
        // Loop through each table body row
        for (let i = 0; i < copiedArr.length - 1; i++) {
            // Compare the next two elements in the loop
            cellA = copiedArr[i];
            cellB = copiedArr[i + 1];
            // now compare based on equal values in primarySort
            if (cellA[primarySort] === cellB[primarySort]) {
                shouldSwitch = isAsc ?
                    checkSortAsc(cellA, cellB, colField) :
                    checkSortDesc(cellA, cellB, colField);
                if (shouldSwitch) {
                    swapArrElements(copiedArr, i);
                    switchHappened = true;
                }
            } else continue;
        }
    }
    return copiedArr;
};

const checkSortAsc = (cellA, cellB, colField) => {
    if (typeof cellA[colField] === 'string') {
        return cellA[colField].toLowerCase() > cellB[colField].toLowerCase() ?
            true :
            false;
    } else {
        return cellA[colField] < cellB[colField] ? true : false;
    }
};

const checkSortDesc = (cellA, cellB, colField) => {
    if (typeof cellA[colField] === 'string') {
        return cellA[colField].toLowerCase() < cellB[colField].toLowerCase() ?
            true :
            false;
    } else {
        return cellA[colField] > cellB[colField] ? true : false;
    }
};

const swapArrElements = (arr, i) =>
    ([arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]);