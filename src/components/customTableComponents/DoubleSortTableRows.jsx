import React from 'react';
import { Box } from '@mui/material';
import { RowData } from './RowData';

export const DoubleSortTableRows = ({
    rowOrder,
    stickyCol,
    colsToHide,
    leftAlignedFields,
    rightAlignedFields,
    rowsWithEndBorders,
    renderedProps,
}) => {
    return rowOrder.map((row, rowIndex) => {
        const rowKeys = Object.keys(row);
        return (
            <Box
                sx={{
                    display: 'table-row',
                    flexDirection: 'row',
                    position: 'relative',
                }}
                key={`row${rowIndex}`}
            >
                {rowKeys.map((cellKey, index) => (
                    <RowData
                        cellData={row[cellKey]}
                        rowLength={rowKeys.length}
                        numberOfRows={rowOrder.length}
                        stickyCol={stickyCol}
                        colsToHide={colsToHide}
                        colNum={index}
                        rowNum={rowIndex}
                        key={`column${index}`}
                        cellKey={cellKey}
                        leftAlignedFields={leftAlignedFields}
                        rightAlignedFields={rightAlignedFields}
                        rowsWithEndBorders={rowsWithEndBorders}
                        renderedProps={renderedProps}
                    />
                ))}
            </Box>
        );
    });
};
