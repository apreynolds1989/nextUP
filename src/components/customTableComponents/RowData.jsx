import { Box, Typography } from '@mui/material';
import React from 'react';

export const RowData = ({
    cellData,
    rowLength,
    colsToHide,
    colNum,
    rowNum,
    cellKey,
    numberOfRows,
    renderedProps,
}) => {
    const colDisplay = colsToHide.includes(colNum) ? 'none' : 'table-cell';
    const endBorder =
        colNum === rowLength - 1
            ? '0px'
            : renderedProps.rowEndBorder || renderedProps.tableBorder;
    const bottomBorder =
        rowNum + 1 === numberOfRows
            ? '0px'
            : renderedProps.rowBottomBorder || renderedProps.tableBorder;
    return (
        <Box
            sx={{
                display: colDisplay,
                backgroundColor: renderedProps.dataBgColor,
                borderRight: endBorder,
                borderBottom: bottomBorder,
                padding: 0.5,
            }}
        >
            <Typography
                sx={{
                    // textAlign: cellKey === 'name' ? 'left' : 'center',
                    textAlign: renderedProps.dataTextAlign,
                    color: renderedProps.dataTextColor,
                }}
            >
                {cellData}
            </Typography>
        </Box>
    );
};
