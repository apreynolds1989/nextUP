import { filterColumn, searchFilter } from "./filterFunctions";

export const onFilterFormSubmit = async (rowOrder, setRowOrder, columnConfig, data) => {
    let filteredRowOrder = rowOrder;
    await columnConfig.forEach((column) => {
        const filterCheck = `${column.field}FilterBy`;
        const filterInput = column.field;
        if (filterInput === '') return null;
        else {
            if (!data[filterCheck]) {
                searchFilter();
            } else {
                filteredRowOrder = filterColumn(filteredRowOrder, column.field, data[filterCheck], data[filterInput])
            }
        }
    });
    setRowOrder(filteredRowOrder);
}