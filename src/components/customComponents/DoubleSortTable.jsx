import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { Box, Button, Typography } from '@mui/material';
import { sortCol } from '../../utilities/helperFunctions';

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
    const [clickedColumn, setClickedColumn] = useState('');

    // console.log(`Sorting by: ${clickedColumn}`);

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
                clickedColumn={clickedColumn}
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
    rowConfig,
    clickedColumn,
    setClickedColumn,
    rowOrder,
    setRowOrder,
    colsToHide,
    ...renderedProps
}) => {
    const [primarySort, setPrimarySort] = useState('');
    const [secondarySort, setSecondarySort] = useState('');
    useEffect(() => {
        console.log(
            `Primary = ${primarySort} and Secondary = ${secondarySort}`,
        );
    });

    const setPrimaryOrSecondary = (field, sortStatus) => {
        if (primarySort === '') {
            setPrimarySort(field);
        } else if (primarySort !== field && secondarySort !== field) {
            setSecondarySort(field);
        } else if (primarySort === field && sortStatus === 'desc') {
            setPrimarySort('');
            if (secondarySort !== '') {
                setPrimarySort(secondarySort);
                setSecondarySort('');
            }
        } else if (secondarySort === field && sortStatus === 'desc') {
            setSecondarySort('');
        }
    };

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
                    clickedColumn={clickedColumn}
                    setClickedColumn={setClickedColumn}
                    setPrimaryOrSecondary={setPrimaryOrSecondary}
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
    rowConfig,
    clickedColumn,
    setClickedColumn,
    setPrimaryOrSecondary,
    rowOrder,
    setRowOrder,
    colsToHide,
    ...renderedProps
}) => {
    const [sortStatus, setSortStatus] = useState('');

    if (clickedColumn !== field && sortStatus !== 'none') {
        setSortStatus('none');
    }

    // useEffect(() => {
    //     const headerBtns = document.querySelectorAll('.headerBtn');
    //     headerBtns.forEach((headerBtn) => {
    //         headerBtn.addEventListener('click', () => {
    //             let target = headerBtn;
    //             headerBtns.forEach((btn) => {
    //                 if (btn !== target) setSortStatus('none');
    //             });
    //         });
    //     });
    // }, []);

    const toggleSort = (e) => {
        setClickedColumn(e.currentTarget.dataset.field);
        if (sortStatus === 'none') {
            setSortStatus('asc');
            setRowOrder(sortCol(rowOrder, field, true));
            setPrimaryOrSecondary(field, sortStatus);
        } else if (sortStatus === 'asc') {
            setSortStatus('desc');
            setRowOrder(sortCol(rowOrder, field, false));
            setPrimaryOrSecondary(field, sortStatus);
        } else {
            setSortStatus('none');
            setRowOrder(rowConfig);
            setPrimaryOrSecondary(field, sortStatus);
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
                        cellData={row[key]}
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
    cellData,
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
                {cellData}
            </Typography>
        </Box>
    );
};
