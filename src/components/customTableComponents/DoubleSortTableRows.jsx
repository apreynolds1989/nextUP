import React from 'react';
import { Box } from '@mui/material';
import { RowData } from './RowData';

export const DoubleSortTableRows = ({
    rowOrder,
    colsToHide,
    leftAlignedFields,
    rightAlignedFields,
    renderedProps,
}) => {
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
                {rowKeys.map((cellKey, index) => (
                    <RowData
                        cellData={row[cellKey]}
                        rowLength={rowKeys.length}
                        numberOfRows={rowOrder.length}
                        colsToHide={colsToHide}
                        colNum={index}
                        rowNum={rowIndex}
                        key={`column${index}`}
                        cellKey={cellKey}
                        leftAlignedFields={leftAlignedFields}
                        rightAlignedFields={rightAlignedFields}
                        renderedProps={renderedProps}
                    />
                ))}
            </Box>
        );
    });
};
