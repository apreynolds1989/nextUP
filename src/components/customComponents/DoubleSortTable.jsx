import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { Box, Button, Typography } from '@mui/material';

const sortAsc = (rowsArr, colField) => {
    let switching, a, b, shouldSwitch;
    let copiedArr = [...rowsArr];
    switching = true;
    console.log('Sorted in ascending order');
    // rowsArr.map((row) => {
    //     console.log(row);
    // });

    // Loop will continue until no switching is done
    while (switching) {
        // start by stating no switching will be done
        switching = false;
        // Loop through each table body row
        for (let i = 0; i < copiedArr.length - 1; i++) {
            // Start by stating no switch to be made
            shouldSwitch = false;
            // Compare the next two elements in the loop
            a = copiedArr[i];
            b = copiedArr[i + 1];
            console.log(`a = ${a}`);
            console.log(`b = ${b}`);
            // Check to see if the elements should swap (string comparison)
            if (a[colField].toLowerCase() > b[colField].toLowerCase()) {
                // is so, state switch to be made
                shouldSwitch = true;
            }
            // if switch is to be made, swap the two elements in the array
            if (shouldSwitch) {
                [copiedArr[i], copiedArr[i + 1]] = [
                    copiedArr[i + 1],
                    copiedArr[i],
                ];
                // then state that a switch has been made and need to loop again
                switching = true;
            }
        }
    }
    return copiedArr;
};

export const DoubleSortTable = ({
    columnConfig,
    rowConfig,
    colsToHide = [],
    stylingProps,
}) => {
    const defaultProps = {
        tableBorder: `2px solid black`,
        outerRadius: 0,
        headerInnerBorder: `2px solid black`,
        rowEndBorder: `2px solid black`,
        rowBottomBorder: `2px solid black`,
        headerBgColor: 'white',
        headerTextColor: 'black',
        headerTextAlign: 'center',
        headerArrowColor: 'black',
        dataBgColor: 'white',
        dataTextColor: 'black',
        dataTextAlign: 'center',
    };

    const renderedProps = { ...defaultProps, ...stylingProps };
    const [rowOrder, setRowOrder] = useState(rowConfig);
    console.log(`the third row starts with: ${rowOrder[2].name}`);
    const [clickedColumn, setClickedColumn] = useState();
    console.log(clickedColumn);

    return (
        <Box
            sx={{
                display: 'table',
                border: renderedProps.tableBorder,
                borderRadius: renderedProps.outerRadius,
                overflow: 'hidden',
            }}
        >
            <DoubleSortTableHeader
                columnConfig={columnConfig}
                setClickedColumn={setClickedColumn}
                rowOrder={rowOrder}
                setRowOrder={setRowOrder}
                colsToHide={colsToHide}
                renderedProps={renderedProps}
            />
            <DoubleSortTableRows
                rowOrder={rowOrder}
                colsToHide={colsToHide}
                renderedProps={renderedProps}
            />
        </Box>
    );
};

const DoubleSortTableHeader = ({
    columnConfig,
    setClickedColumn,
    rowOrder,
    setRowOrder,
    colsToHide,
    ...renderedProps
}) => {
    return (
        <Box
            sx={{
                display: 'table-row',
                backgroundColor: renderedProps.renderedProps.headerBgColor,
            }}
        >
            {columnConfig.map((column, index) => (
                <ColumnHeaderText
                    {...column}
                    columnConfig={columnConfig}
                    setClickedColumn={setClickedColumn}
                    rowOrder={rowOrder}
                    setRowOrder={setRowOrder}
                    colsToHide={colsToHide}
                    colNum={index}
                    key={`column${index}`}
                    renderedProps={renderedProps}
                />
            ))}
        </Box>
    );
};

const ColumnHeaderText = ({
    columnName,
    initialSort = 'none',
    field,
    colNum,
    columnConfig,
    setClickedColumn,
    rowOrder,
    setRowOrder,
    colsToHide,
    ...renderedProps
}) => {
    const [sortStatus, setSortStatus] = useState(initialSort);
    const toggleSort = async (e) => {
        await setClickedColumn(e.currentTarget.dataset.field);
        if (sortStatus === 'none') {
            setSortStatus('asc');
            await setRowOrder(sortAsc(rowOrder, field));
            // setRowOrder(rowOrder);
            // console.log(rowOrder);
        } else if (sortStatus === 'asc') {
            setSortStatus('desc');
        } else {
            setSortStatus('none');
        }
    };

    const colDisplay = colsToHide.includes(colNum) ? 'none' : 'table-cell';

    const endBorder =
        colNum === columnConfig.length - 1
            ? '0px'
            : renderedProps.renderedProps.renderedProps.headerInnerBorder ||
              renderedProps.renderedProps.renderedProps.tableBorder;
    return (
        <Box
            sx={{
                display: colDisplay,
                borderRight: endBorder,
                borderBottom:
                    renderedProps.renderedProps.renderedProps
                        .headerInnerBorder ||
                    renderedProps.renderedProps.renderedProps.tableBorder,
            }}
        >
            <Button
                className='headerBtn'
                data-field={field}
                onClick={toggleSort}
                sx={{ padding: 2 }}
            >
                <Typography
                    sx={{
                        paddingRight: 2,
                        textAlign:
                            renderedProps.renderedProps.renderedProps
                                .headerTextAlign,
                        color: renderedProps.renderedProps.renderedProps
                            .headerTextColor,
                    }}
                >
                    {columnName}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    {sortStatus === 'asc' ? (
                        <FontAwesomeIcon
                            icon={faAngleUp}
                            color={
                                renderedProps.renderedProps.renderedProps
                                    .headerArrowColor
                            }
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={faAngleUp}
                            color={
                                renderedProps.renderedProps.renderedProps
                                    .headerArrowColor
                            }
                            style={{ opacity: 0.25 }}
                        />
                    )}
                    {sortStatus === 'desc' ? (
                        <FontAwesomeIcon
                            icon={faAngleDown}
                            color={
                                renderedProps.renderedProps.renderedProps
                                    .headerArrowColor
                            }
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={faAngleDown}
                            color={
                                renderedProps.renderedProps.renderedProps
                                    .headerArrowColor
                            }
                            style={{ opacity: 0.25 }}
                        />
                    )}
                </Box>
            </Button>
        </Box>
    );
};

const DoubleSortTableRows = ({ rowOrder, colsToHide, ...renderedProps }) => {
    return rowOrder.map((row, rowIndex) => {
        const rowKeys = Object.keys(row);
        return (
            <Box
                sx={{
                    display: 'table-row',
                    flexDirection: 'row',
                }}
                key={`row${rowIndex}`}
            >
                {rowKeys.map((key, index) => (
                    <RowData
                        rowData={row[key]}
                        rowLength={rowKeys.length}
                        numberOfRows={rowOrder.length}
                        colsToHide={colsToHide}
                        colNum={index}
                        rowNum={rowIndex}
                        key={`column${index}`}
                        renderedProps={renderedProps}
                    />
                ))}
            </Box>
        );
    });
};

const RowData = ({
    rowData,
    rowLength,
    colsToHide,
    colNum,
    rowNum,
    numberOfRows,
    renderedProps,
}) => {
    const colDisplay = colsToHide.includes(colNum) ? 'none' : 'table-cell';
    const endBorder =
        colNum === rowLength - 1
            ? '0px'
            : renderedProps.renderedProps.rowEndBorder ||
              renderedProps.renderedProps.tableBorder;
    const bottomBorder =
        rowNum + 1 === numberOfRows
            ? '0px'
            : renderedProps.renderedProps.rowBottomBorder ||
              renderedProps.renderedProps.tableBorder;
    return (
        <Box
            sx={{
                display: colDisplay,
                backgroundColor: renderedProps.renderedProps.dataBgColor,
                borderRight: endBorder,
                borderBottom: bottomBorder,
                padding: 0.5,
            }}
        >
            <Typography
                sx={{
                    textAlign: renderedProps.renderedProps.dataTextAlign,
                    color: renderedProps.renderedProps.dataTextColor,
                }}
            >
                {rowData}
            </Typography>
        </Box>
    );
};
