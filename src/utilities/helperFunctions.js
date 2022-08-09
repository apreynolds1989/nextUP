const checkSortAsc = (cellA, cellB, colField) =>
    cellA[colField].toLowerCase() > cellB[colField].toLowerCase() ?
    true :
    false;

const checkSortDesc = (cellA, cellB, colField) =>
    cellA[colField].toLowerCase() < cellB[colField].toLowerCase() ?
    true :
    false;

const swapArrElements = (arr, i) =>
    ([arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]);

export const sortCol = (rowsArr, colField, isAsc) => {
    let switchHappened, cellA, cellB, shouldSwitch;
    let copiedArr = [...rowsArr];
    switchHappened = true;
    while (switchHappened) {
        // start by stating no switchHappened
        switchHappened = false;
        // Loop through each table body row
        for (let i = 0; i < copiedArr.length - 1; i++) {
            shouldSwitch = false;
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