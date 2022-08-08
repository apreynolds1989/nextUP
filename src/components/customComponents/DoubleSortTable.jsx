import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { Box, Button, Typography } from '@mui/material';

const sortAsc = (rowsArr, colNum) => {
    let switching, a, b, shouldSwitch;
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
        for (let i = 0; i < rowsArr.length - 1; i++) {
            // Start by stating no switch to be made
            shouldSwitch = false;
            // Compare the next two elements in the loop
            a = rowsArr[i];
            b = rowsArr[i + 1];
            // Check to see if the elements should swap (string comparison)
            if (a[colNum].toLowerCase() > b[colNum].toLowerCase()) {
                // is so, state switch to be made
                shouldSwitch = true;
            }
            // if switch is to be made, swap the two elements in the array
            if (shouldSwitch) {
                [rowsArr[i], rowsArr[i + 1]] = [rowsArr[i + 1], rowsArr[i]];
                // then state that a switch has been made and need to loop again
                switching = true;
            }
        }
    }
    return rowsArr;
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
                rowConfig={rowConfig}
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
    rowConfig,
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
                    rowConfig={rowConfig}
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
    colNum,
    columnConfig,
    rowConfig,
    setRowOrder,
    colsToHide,
    ...renderedProps
}) => {
    const [sortStatus, setSortStatus] = useState(initialSort);
    const toggleSort = async () => {
        if (sortStatus === 'none') {
            setSortStatus('asc');
            await sortAsc(rowConfig, colNum);
            setRowOrder(rowConfig);
            console.log(rowConfig);
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
            <Button onClick={toggleSort} sx={{ padding: 2 }}>
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
    return rowOrder.map((rows, rowIndex) => (
        <Box
            sx={{
                display: 'table-row',
                flexDirection: 'row',
            }}
            key={`row${rowIndex}`}
        >
            {rows.map((row, index) => (
                <RowData
                    row={row}
                    rows={rows}
                    rowOrder={rowOrder}
                    colsToHide={colsToHide}
                    colNum={index}
                    rowNum={rowIndex}
                    key={`column${index}`}
                    renderedProps={renderedProps}
                />
            ))}
        </Box>
    ));
};

const RowData = ({
    row,
    colsToHide,
    colNum,
    rowNum,
    rows,
    rowOrder,
    renderedProps,
}) => {
    const colDisplay = colsToHide.includes(colNum) ? 'none' : 'table-cell';
    const endBorder =
        colNum === rows.length - 1
            ? '0px'
            : renderedProps.renderedProps.rowEndBorder ||
              renderedProps.renderedProps.tableBorder;
    const bottomBorder =
        rowNum + 1 === rowOrder.length
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
                {row}
            </Typography>
        </Box>
    );
};
