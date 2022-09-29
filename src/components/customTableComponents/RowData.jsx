import { Box, Typography } from '@mui/material';
import React from 'react';

export const RowData = ({
    cellData,
    rowLength,
    numberedColumn,
    stickyCol,
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

    const fixedColumn =
        stickyCol === cellKey
            ? {
                  position: 'sticky',
                  left: '0px',
                  zIndex: 5,
                  background: renderedProps.dataBgColor,
                  borderRight: renderedProps.rowEndBorder,
              }
            : {};

    return (
        <Box
            sx={{
                display: colDisplay,
                position: 'relative',
                backgroundColor: backgroundColor,
                borderRight: thisRowEndBorder,
                borderBottom: bottomBorder,
                paddingX: renderedProps.dataPaddingX,
                paddingY: renderedProps.dataPaddingY,
                whiteSpace: 'nowrap',
                ...fixedColumn,
            }}
        >
            <Typography
                sx={{
                    textAlign: textAlignment,
                    color: renderedProps.dataTextColor,
                    fontSize: renderedProps.dataTextSize,
                }}
            >
                {numberedColumn === cellKey && (
                    <Typography
                        sx={{
                            display: 'inline-block',
                            textAlign: textAlignment,
                            color: renderedProps.dataTextColor,
                            fontSize: renderedProps.dataTextSize,
                            paddingRight: 1,
                        }}
                    >
                        {rowNum + 1}.
                    </Typography>
                )}
                {cellData}
            </Typography>
        </Box>
    );
};
