import React, { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
// import { TableFilterButtons } from './TableFilterButtons';
// import { FilterColumnHeaders } from './FilterColumnHeaders';
import { DoubleSortTableRows } from './DoubleSortTableRows';
import { DoubleSortTableHeader } from './DoubleSortTableHeader';
import { TableFilterModal } from './TableFilterModal';

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
    // const [isFiltersOpen, setIsFiltersOpen] = useState(false);

    // const toggleIsFiltersOpen = () => {
    //     setIsFiltersOpen(!isFiltersOpen);
    // };

    return (
        <>
            {/* {isFilterable && (
                <TableFilterButtons
                    isFiltersOpen={isFiltersOpen}
                    toggleIsFiltersOpen={toggleIsFiltersOpen}
                    renderedProps={renderedProps}
                />
            )} */}
            {isFilterable && (
                <TableFilterModal
                    renderedProps={renderedProps}
                    columnConfig={columnConfig}
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
                    {/* {isFilterable && isFiltersOpen && (
                        <FilterColumnHeaders
                            columnConfig={columnConfig}
                            colsToHide={colsToHide}
                            renderedProps={renderedProps}
                        />
                    )} */}
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
                        rowOrder={rowOrder}
                        stickyCol={stickyCol}
                        colsToHide={colsToHide}
                        leftAlignedFields={leftAlignedFields}
                        rightAlignedFields={rightAlignedFields}
                        rowsWithEndBorders={rowsWithEndBorders}
                        renderedProps={renderedProps}
                    />
                </Box>
            </Box>
        </>
    );
};
