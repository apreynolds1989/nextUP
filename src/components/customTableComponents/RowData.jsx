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
    leftAlignedFields,
    rightAlignedFields,
    renderedProps,
}) => {
    const colDisplay = colsToHide.includes(colNum) ? 'none' : 'table-cell';
    let textAlignment = 'center';
    if (leftAlignedFields && leftAlignedFields.includes(cellKey))
        textAlignment = 'left';
    if (rightAlignedFields && rightAlignedFields.includes(cellKey))
        textAlignment = 'right';
    const backgroundColor =
        rowNum % 2
            ? renderedProps.dataBgColorOne
            : renderedProps.dataBgColorTwo;
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
                backgroundColor: backgroundColor,
                borderRight: endBorder,
                borderBottom: bottomBorder,
                paddingX: 1,
                paddingY: 2,
            }}
        >
            <Typography
                sx={{
                    textAlign: textAlignment,
                    // textAlign: renderedProps.dataTextAlign,
                    color: renderedProps.dataTextColor,
                }}
            >
                {cellData}
            </Typography>
        </Box>
    );
};
