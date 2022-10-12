import React, { useState, useEffect } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { DoubleSortTableRows } from './DoubleSortTableRows';
import { DoubleSortTableHeader } from './DoubleSortTableHeader';
import { TableFilterModal } from './TableFilterModal';
import { sortPrimary } from './utilities/sortFunctions';
import { Pagination } from './Pagination';
import { TableSearchBox } from './TableSearchBox';

export const DoubleSortTable = ({
    columnConfig,
    rowConfig,
    isSearchable = false,
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
    const [filteringArr, setFilteringArr] = useState([]);
    const [searchArr, setSearchArr] = useState([]);
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

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: 1,
                    width: '100%',
                }}
            >
                {isSearchable && (
                    <TableSearchBox
                        rowConfig={rowConfig}
                        rowOrder={rowOrder}
                        filteringArr={filteringArr}
                        setRowOrder={setRowOrder}
                        searchArr={searchArr}
                    />
                )}
                {isFilterable && (
                    <TableFilterModal
                        renderedProps={renderedProps}
                        columnConfig={columnConfig}
                        rowConfig={rowConfig}
                        setRowOrder={setRowOrder}
                        filteringArr={filteringArr}
                        setFilteringArr={setFilteringArr}
                        setSearchArr={setSearchArr}
                    />
                )}
            </Box>
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
                <Pagination
                    firstItemOnPage={firstItemOnPage}
                    setFirstItemOnPage={setFirstItemOnPage}
                    lastItemOnPage={lastItemOnPage}
                    setLastItemOnPage={setLastItemOnPage}
                    setPaginatedRows={setPaginatedRows}
                    rowOrder={rowOrder}
                    renderedProps={renderedProps}
                />
            )}
        </>
    );
};
