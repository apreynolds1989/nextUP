import React, { useState } from 'react';
import { Box } from '@mui/material';
import { TableFilterButtons } from './TableFilterButtons';
import { FilterColumnHeaders } from './FilterColumnHeaders';
import { DoubleSortTableRows } from './DoubleSortTableRows';
import { DoubleSortTableHeader } from './DoubleSortTableHeader';

export const DoubleSortTable = ({
    columnConfig,
    rowConfig,
    initialPrimaryField,
    colsToHide = [],
    ...stylingProps
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
                    renderedProps={renderedProps}
                />
            </Box>
        </Box>
    );
};
