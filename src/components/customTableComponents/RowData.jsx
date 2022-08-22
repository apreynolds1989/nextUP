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
    rowsWithEndBorders,
    renderedProps,
}) => {
    const colDisplay = colsToHide.includes(colNum) ? 'none' : 'table-cell';
    let textAlignment = renderedProps.dataTextAlign;
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
    const thisRowEndBorder = rowsWithEndBorders.includes(cellKey)
        ? endBorder
        : '0px';
    const bottomBorder =
        rowNum + 1 === numberOfRows
            ? '0px'
            : renderedProps.rowBottomBorder || renderedProps.tableBorder;
    return (
        <Box
            sx={{
                display: colDisplay,
                backgroundColor: backgroundColor,
                borderRight: thisRowEndBorder,
                borderBottom: bottomBorder,
                paddingX: renderedProps.dataPaddingX,
                paddingY: renderedProps.dataPaddingY,
                // whiteSpace: 'nowrap',
                // position: cellKey === 'name' ? 'absolute' : 'static',
                // left: cellKey === 'name' ? 'auto' : '150px',
                // width: cellKey === 'name' ? '125px' : 'auto',
                // zIndex: cellKey === 'name' ? 2 : 1,
            }}
        >
            <Typography
                sx={{
                    textAlign: textAlignment,
                    color: renderedProps.dataTextColor,
                    fontSize: renderedProps.dataTextSize,
                }}
            >
                {cellData}
            </Typography>
        </Box>
    );
};
