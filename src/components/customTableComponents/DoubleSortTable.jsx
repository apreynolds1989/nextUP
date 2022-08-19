import React, { useState } from 'react';
import { Box } from '@mui/material';
import { TableFilterButtons } from './TableFilterButtons';
import { FilterColumnHeaders } from './FilterColumnHeaders';
import { DoubleSortTableRows } from './DoubleSortTableRows';
import { DoubleSortTableHeader } from './DoubleSortTableHeader';

export const DoubleSortTable = ({
    columnConfig,
    rowConfig,
    isSortable = false,
    initialPrimaryField,
    colsToHide = [],
    leftAlignedFields,
    rightAlignedFields,
    ...stylingProps
}) => {
    const defaultProps = {
        tableBorder: `2px solid black`,
        outerRadius: 0,
        headerInnerBorder: `0px`,
        headerBottomBorder: '2px solid #c6c6c6',
        rowEndBorder: `0px`,
        rowBottomBorder: `0px`,
        headerBgColor: '#ECF0F1',
        headerTextColor: 'black',
        headerTextAlign: 'center',
        headerArrowColor: 'black',
        dataBgColorOne: 'white',
        dataBgColorTwo: '#ECF0F1',
        dataTextColor: 'black',
        dataTextAlign: 'center',
        dataPaddingX: 2,
        dataPaddingY: 2,
    };

    // overide defaults with anything passed to stylingProps
    const renderedProps = { ...defaultProps, ...stylingProps };
    const [rowOrder, setRowOrder] = useState(rowConfig);
    const [clickedColumn, setClickedColumn] = useState('');
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);

    const toggleIsFiltersOpen = () => {
        setIsFiltersOpen(!isFiltersOpen);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <TableFilterButtons
                isFiltersOpen={isFiltersOpen}
                toggleIsFiltersOpen={toggleIsFiltersOpen}
                renderedProps={renderedProps}
            />
            <Box
                sx={{
                    display: 'table',
                    border: renderedProps.tableBorder,
                    borderRadius: renderedProps.outerRadius,
                    overflow: 'hidden',
                }}
            >
                {isFiltersOpen && (
                    <FilterColumnHeaders
                        columnConfig={columnConfig}
                        colsToHide={colsToHide}
                        renderedProps={renderedProps}
                    />
                )}
                <DoubleSortTableHeader
                    columnConfig={columnConfig}
                    rowConfig={rowConfig}
                    isSortable={isSortable}
                    initialPrimaryField={initialPrimaryField}
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
                    leftAlignedFields={leftAlignedFields}
                    rightAlignedFields={rightAlignedFields}
                    renderedProps={renderedProps}
                />
            </Box>
        </Box>
    );
};
