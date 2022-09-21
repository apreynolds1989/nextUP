import { filterColumnGreaterThan, searchFilter } from "./filterFunctions";

export const onFilterFormSubmit = (rowOrder, setRowOrder, columnConfig, data) => {
    columnConfig.forEach(column => {
        const filterCheck = `${column.field}FilterBy`;
        const filterInput = column.field;
        if (!data[filterCheck]) {
            searchFilter();
        } else {
            switch (data[filterCheck]) {
                case 'greaterThan':
                    setRowOrder(filterColumnGreaterThan(rowOrder, column.field, data[filterInput]));
                    break;
            
                default:
                    break;
            }
        }
    });
}