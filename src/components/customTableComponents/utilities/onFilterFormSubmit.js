import { filterColumn } from "./filterFunctions";

export const onFilterFormSubmit = async (rowOrder, setRowOrder, filteringArr, setSearchArr) => {
    let filteredRowOrder = rowOrder;
    await filteringArr.forEach(elementArr => {
        filteredRowOrder = filterColumn(filteredRowOrder, elementArr[0], elementArr[1], elementArr[2])
    });
    setRowOrder(filteredRowOrder);
    setSearchArr(filteredRowOrder);
}