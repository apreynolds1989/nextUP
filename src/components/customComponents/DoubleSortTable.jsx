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
    borderColor = 'black',
    columnConfig,
    rowConfig,
    outerBorder = `2px solid ${borderColor}`,
    outerRadius = 0,
    headerInnerBorder = `2px solid ${borderColor}`,
    rowEndBorder = `2px solid ${borderColor}`,
    rowBottomBorder = `2px solid ${borderColor}`,
    headerBgColor = 'white',
    headerTextColor = 'black',
    headerTextAlign = 'center',
    headerArrowColor = 'black',
    dataBgColor = 'white',
    dataTextColor = 'black',
    dataTextAlign = 'center',
    colsToHide = [],
}) => {
    const [rowOrder, setRowOrder] = useState(rowConfig);

    return (
        <Box
            sx={{
                display: 'table',
                border: outerBorder,
                borderRadius: outerRadius,
                overflow: 'hidden',
            }}
        >
            <DoubleSortTableHeader
                headerInnerBorder={headerInnerBorder}
                columnConfig={columnConfig}
                rowConfig={rowConfig}
                setRowOrder={setRowOrder}
                colsToHide={colsToHide}
                headerBgColor={headerBgColor}
                headerTextColor={headerTextColor}
                headerTextAlign={headerTextAlign}
                headerArrowColor={headerArrowColor}
            />
            <DoubleSortTableRows
                rowEndBorder={rowEndBorder}
                rowBottomBorder={rowBottomBorder}
                rowOrder={rowOrder}
                colsToHide={colsToHide}
                dataBgColor={dataBgColor}
                dataTextColor={dataTextColor}
                dataTextAlign={dataTextAlign}
            />
        </Box>
    );
};

const DoubleSortTableHeader = ({
    columnConfig,
    rowConfig,
    setRowOrder,
    colsToHide,
    headerInnerBorder,
    headerBgColor,
    headerTextColor,
    headerTextAlign,
    headerArrowColor,
}) => {
    return (
        <Box
            sx={{
                display: 'table-row',
                backgroundColor: headerBgColor,
            }}
        >
            {columnConfig.map((column, index) => (
                <ColumnHeaderText
                    {...column}
                    columnConfig={columnConfig}
                    rowConfig={rowConfig}
                    setRowOrder={setRowOrder}
                    colsToHide={colsToHide}
                    headerInnerBorder={headerInnerBorder}
                    headerTextColor={headerTextColor}
                    headerTextAlign={headerTextAlign}
                    headerArrowColor={headerArrowColor}
                    colNum={index}
                    key={`column${index}`}
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
    headerInnerBorder,
    headerTextColor,
    headerTextAlign,
    headerArrowColor,
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
        colNum === columnConfig.length - 1 ? '0px' : headerInnerBorder;

    return (
        <Box
            sx={{
                display: colDisplay,
                borderRight: endBorder,
                borderBottom: headerInnerBorder,
            }}
        >
            <Button onClick={toggleSort} sx={{ padding: 2 }}>
                <Typography
                    sx={{
                        paddingRight: 2,
                        textAlign: headerTextAlign,
                        color: headerTextColor,
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
                            color={headerArrowColor}
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={faAngleUp}
                            color={headerArrowColor}
                            style={{ opacity: 0.25 }}
                        />
                    )}
                    {sortStatus === 'desc' ? (
                        <FontAwesomeIcon
                            icon={faAngleDown}
                            color={headerArrowColor}
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={faAngleDown}
                            color={headerArrowColor}
                            style={{ opacity: 0.25 }}
                        />
                    )}
                    {/* {sortStatus === 'asc' && (
                        <FontAwesomeIcon icon={faAngleUp} color='#00000015' />
                    )}
                    {sortStatus === 'desc' && (
                        <FontAwesomeIcon icon={faAngleDown} />
                    )} */}
                </Box>
            </Button>
        </Box>
    );
};

const DoubleSortTableRows = ({
    rowOrder,
    colsToHide,
    rowEndBorder,
    rowBottomBorder,
    dataBgColor,
    dataTextColor,
    dataTextAlign,
}) => {
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
                    rowEndBorder={rowEndBorder}
                    rowBottomBorder={rowBottomBorder}
                    dataBgColor={dataBgColor}
                    dataTextColor={dataTextColor}
                    dataTextAlign={dataTextAlign}
                    colNum={index}
                    rowNum={rowIndex}
                    key={`column${index}`}
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
    rowEndBorder,
    rowBottomBorder,
    dataBgColor,
    dataTextColor,
    dataTextAlign,
}) => {
    const colDisplay = colsToHide.includes(colNum) ? 'none' : 'table-cell';
    const endBorder = colNum === rows.length - 1 ? '0px' : rowEndBorder;
    const bottomBorder =
        rowNum + 1 === rowOrder.length ? '0px' : rowBottomBorder;

    return (
        <Box
            sx={{
                display: colDisplay,
                backgroundColor: dataBgColor,
                borderRight: endBorder,
                borderBottom: bottomBorder,
                padding: 0.5,
            }}
        >
            <Typography sx={{ textAlign: dataTextAlign, color: dataTextColor }}>
                {row}
            </Typography>
        </Box>
    );
};
