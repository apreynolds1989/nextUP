import React, { useState } from 'react';
import { Box, Button, useMediaQuery } from '@mui/material';
import { DoubleSortTableRows } from './DoubleSortTableRows';
import { DoubleSortTableHeader } from './DoubleSortTableHeader';
import { TableFilterModal } from './TableFilterModal';
import { sortPrimary } from './utilities/sortFunctions';
import { useEffect } from 'react';

export const DoubleSortTable = ({
    columnConfig,
    rowConfig,
    isSortable = false,
    isFilterable = false,
    initialPrimaryField,
    stickyCol = '',
    colsToHide = [],
    leftAlignedFields = [],
    rightAlignedFields = [],
    rowsWithEndBorders = [],
    rowsWithBottomBorders = [],
    ...stylingProps
}) => {
    const isMobileSize = useMediaQuery('(max-width:600px)');

    const defaultProps = {
        tableBorder: `2px solid black`,
        outerRadius: 0,
        headerInnerBorder: `0px`,
        headerBottomBorder: '2px solid #c6c6c6',
        rowEndBorder: `0px`,
        rowBottomBorder: `0px`,
        headerBgColor: '#ECF0F1',
        headerTextColor: 'black',
        headerTextSize: isMobileSize ? '12px' : '16px',
        headerTextAlign: 'center',
        headerArrowColor: 'black',
        dataBgColorOne: 'white',
        dataBgColorTwo: '#ECF0F1',
        dataTextColor: 'black',
        dataTextSize: isMobileSize ? '10px' : '14px',
        dataTextAlign: 'center',
        dataPaddingX: 2,
        dataPaddingY: isMobileSize ? 1 : 2,
    };

    // overide defaults with anything passed to stylingProps
    const renderedProps = { ...defaultProps, ...stylingProps };
    const [rowOrder, setRowOrder] = useState(rowConfig);
    const [clickedColumn, setClickedColumn] = useState('');
    const [isInitialPrimarySort, setIsInitialPrimarySort] = useState(
        initialPrimaryField ? true : false,
    );

    if (isInitialPrimarySort) {
        setRowOrder(
            sortPrimary(
                rowOrder,
                initialPrimaryField.field,
                initialPrimaryField.sortStatus === 'asc' ? true : false,
            ),
        );
        setIsInitialPrimarySort(false);
    }

    const [firstItemOnPage, setFirstItemOnPage] = useState(0);
    const [lastItemOnPage, setLastItemOnPage] = useState(25);
    const [paginatedRows, setPaginatedRows] = useState([]);
    useEffect(() => {
        if (rowOrder.length > 25) {
            setPaginatedRows(rowOrder.slice(firstItemOnPage, lastItemOnPage));
        }
    }, [rowOrder, firstItemOnPage, lastItemOnPage]);

    const paginationNextHandler = () => {
        setFirstItemOnPage(firstItemOnPage + 25);
        setLastItemOnPage(
            lastItemOnPage + 25 > rowOrder.length
                ? rowOrder.length
                : lastItemOnPage + 25,
        );
        setPaginatedRows(rowOrder.slice(firstItemOnPage, lastItemOnPage));
    };

    const paginationPrevHandler = () => {
        const lastItemOfArr = rowOrder.length - 1;
        setFirstItemOnPage(firstItemOnPage - 25 < 0 ? 0 : firstItemOnPage - 25);
        setLastItemOnPage(
            lastItemOnPage === rowOrder.length
                ? lastItemOfArr - (rowOrder.length % 25)
                : lastItemOnPage - 25,
        );
        setPaginatedRows(rowOrder.slice(firstItemOnPage, lastItemOnPage));
    };

    const paginationFirstPageHandler = () => {
        setFirstItemOnPage(0);
        setLastItemOnPage(25);
        setPaginatedRows(rowOrder.slice(firstItemOnPage, lastItemOnPage));
    };

    const paginationLastPageHandler = () => {
        const lastItemOfArr = rowOrder.length - 1;
        setFirstItemOnPage(lastItemOfArr - (rowOrder.length % 25));
        setLastItemOnPage(lastItemOfArr + 1);
        setPaginatedRows(rowOrder.slice(firstItemOnPage, lastItemOnPage));
    };

    return (
        <>
            {isFilterable && (
                <TableFilterModal
                    renderedProps={renderedProps}
                    columnConfig={columnConfig}
                    rowOrder={rowOrder}
                    setRowOrder={setRowOrder}
                />
            )}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    border: renderedProps.tableBorder,
                    borderRadius: renderedProps.outerRadius,
                    overflow: 'auto',
                }}
            >
                <Box
                    sx={{
                        display: 'table',
                        position: 'relative',
                    }}
                >
                    <DoubleSortTableHeader
                        isMobileSize={isMobileSize}
                        columnConfig={columnConfig}
                        rowConfig={rowConfig}
                        isSortable={isSortable}
                        initialPrimaryField={initialPrimaryField}
                        clickedColumn={clickedColumn}
                        setClickedColumn={setClickedColumn}
                        rowOrder={rowOrder}
                        setRowOrder={setRowOrder}
                        stickyCol={stickyCol}
                        colsToHide={colsToHide}
                        renderedProps={renderedProps}
                    />
                    <DoubleSortTableRows
                        rowOrder={
                            rowOrder.length > 24 ? paginatedRows : rowOrder
                        }
                        stickyCol={stickyCol}
                        colsToHide={colsToHide}
                        leftAlignedFields={leftAlignedFields}
                        rightAlignedFields={rightAlignedFields}
                        rowsWithEndBorders={rowsWithEndBorders}
                        renderedProps={renderedProps}
                    />
                </Box>
            </Box>
            {paginatedRows.length > 0 && (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        marginTop: 2,
                    }}
                >
                    <Button
                        onClick={
                            firstItemOnPage !== 0
                                ? paginationFirstPageHandler
                                : null
                        }
                        sx={{
                            fontWeight: 'bold',
                            borderRight: 2,
                            borderColor: renderedProps.dataTextColor,
                            borderRadius: 0,
                        }}
                    >
                        First Page
                    </Button>
                    <Button
                        onClick={
                            firstItemOnPage !== 0 ? paginationPrevHandler : null
                        }
                        sx={{
                            fontWeight: 'bold',
                            borderRight: 2,
                            borderColor: renderedProps.dataTextColor,
                            borderRadius: 0,
                        }}
                    >
                        Prev 25
                    </Button>
                    <Button
                        onClick={
                            lastItemOnPage !== rowOrder.length
                                ? paginationNextHandler
                                : null
                        }
                        sx={{
                            fontWeight: 'bold',
                            borderRight: 2,
                            borderColor: renderedProps.dataTextColor,
                            borderRadius: 0,
                        }}
                    >
                        Next 25
                    </Button>
                    <Button
                        onClick={
                            lastItemOnPage !== rowOrder.length
                                ? paginationLastPageHandler
                                : null
                        }
                        sx={{ fontWeight: 'bold' }}
                    >
                        Last Page
                    </Button>
                </Box>
            )}
        </>
    );
};
