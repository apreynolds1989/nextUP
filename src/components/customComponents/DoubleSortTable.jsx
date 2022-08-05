import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { Box, Button, Typography } from '@mui/material';

export const DoubleSortTable = ({
    borderColor = 'black',
    columnConfig,
    rowConfig,
    outerBorder = `2px solid ${borderColor}`,
    outerRadius = 0,
    headerInnerBorder = `2px solid ${borderColor}`,
    rowEndBorder = `2px solid ${borderColor}`,
    rowBottomBorder = `2px solid ${borderColor}`,
    headerBgColor = 'white',
    headerTextColor = 'black',
    headerTextAlign = 'center',
    headerArrowColor = 'black',
    dataBgColor = 'white',
    dataTextColor = 'black',
    dataTextAlign = 'center',

    colsToHide = [],
}) => {
    return (
        <Box
            sx={{
                display: 'table',
                border: outerBorder,
                borderRadius: outerRadius,
                overflow: 'hidden',
            }}
        >
            <DoubleSortTableHeader
                headerInnerBorder={headerInnerBorder}
                columnConfig={columnConfig}
                colsToHide={colsToHide}
                headerBgColor={headerBgColor}
                headerTextColor={headerTextColor}
                headerTextAlign={headerTextAlign}
                headerArrowColor={headerArrowColor}
            />
            <DoubleSortTableRows
                rowEndBorder={rowEndBorder}
                rowBottomBorder={rowBottomBorder}
                rowConfig={rowConfig}
                colsToHide={colsToHide}
                dataBgColor={dataBgColor}
                dataTextColor={dataTextColor}
                dataTextAlign={dataTextAlign}
            />
        </Box>
    );
};

const DoubleSortTableHeader = ({
    columnConfig,
    colsToHide,
    headerInnerBorder,
    headerBgColor,
    headerTextColor,
    headerTextAlign,
    headerArrowColor,
}) => {
    return (
        <Box
            sx={{
                display: 'table-row',
                backgroundColor: headerBgColor,
            }}
        >
            {columnConfig.map((column, index) => (
                <ColumnHeaderText
                    {...column}
                    columnConfig={columnConfig}
                    colsToHide={colsToHide}
                    headerInnerBorder={headerInnerBorder}
                    headerTextColor={headerTextColor}
                    headerTextAlign={headerTextAlign}
                    headerArrowColor={headerArrowColor}
                    colNum={index}
                    key={`column${index}`}
                />
            ))}
        </Box>
    );
};

const ColumnHeaderText = ({
    columnName,
    initialSort = 'none',
    colNum,
    columnConfig,
    colsToHide,
    headerInnerBorder,
    headerTextColor,
    headerTextAlign,
    headerArrowColor,
}) => {
    const [sortStatus, setSortStatus] = useState(initialSort);
    const toggleSort = () => {
        if (sortStatus === 'none') {
            setSortStatus('asc');
        } else if (sortStatus === 'asc') {
            setSortStatus('desc');
        } else {
            setSortStatus('none');
        }
    };

    const colDisplay = colsToHide.includes(colNum) ? 'none' : 'table-cell';

    const endBorder =
        colNum === columnConfig.length - 1 ? '0px' : headerInnerBorder;

    return (
        <Box
            sx={{
                display: colDisplay,
                borderRight: endBorder,
                borderBottom: headerInnerBorder,
            }}
        >
            <Button onClick={toggleSort} sx={{ padding: 2 }}>
                <Typography
                    sx={{
                        paddingRight: 2,
                        textAlign: headerTextAlign,
                        color: headerTextColor,
                    }}
                >
                    {columnName}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    {sortStatus === 'asc' ? (
                        <FontAwesomeIcon
                            icon={faAngleUp}
                            color={headerArrowColor}
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={faAngleUp}
                            color={headerArrowColor}
                            style={{ opacity: 0.25 }}
                        />
                    )}
                    {sortStatus === 'desc' ? (
                        <FontAwesomeIcon
                            icon={faAngleDown}
                            color={headerArrowColor}
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={faAngleDown}
                            color={headerArrowColor}
                            style={{ opacity: 0.25 }}
                        />
                    )}
                    {/* {sortStatus === 'asc' && (
                        <FontAwesomeIcon icon={faAngleUp} color='#00000015' />
                    )}
                    {sortStatus === 'desc' && (
                        <FontAwesomeIcon icon={faAngleDown} />
                    )} */}
                </Box>
            </Button>
        </Box>
    );
};

const DoubleSortTableRows = ({
    rowConfig,
    colsToHide,
    rowEndBorder,
    rowBottomBorder,
    dataBgColor,
    dataTextColor,
    dataTextAlign,
}) => {
    return rowConfig.map((rows, rowIndex) => (
        <Box
            sx={{
                display: 'table-row',
                flexDirection: 'row',
            }}
            key={`row${rowIndex}`}
        >
            {rows.map((row, index) => (
                <RowData
                    {...row}
                    rows={rows}
                    rowConfig={rowConfig}
                    colsToHide={colsToHide}
                    rowEndBorder={rowEndBorder}
                    rowBottomBorder={rowBottomBorder}
                    dataBgColor={dataBgColor}
                    dataTextColor={dataTextColor}
                    dataTextAlign={dataTextAlign}
                    colNum={index}
                    rowNum={rowIndex}
                    key={`column${index}`}
                />
            ))}
        </Box>
    ));
};

const RowData = ({
    data,
    colsToHide,
    colNum,
    rowNum,
    rows,
    rowConfig,
    rowEndBorder,
    rowBottomBorder,
    dataBgColor,
    dataTextColor,
    dataTextAlign,
}) => {
    const colDisplay = colsToHide.includes(colNum) ? 'none' : 'table-cell';
    const endBorder = colNum === rows.length - 1 ? '0px' : rowEndBorder;
    const bottomBorder =
        rowNum + 1 === rowConfig.length ? '0px' : rowBottomBorder;

    return (
        <Box
            sx={{
                display: colDisplay,
                backgroundColor: dataBgColor,
                borderRight: endBorder,
                borderBottom: bottomBorder,
                padding: 0.5,
            }}
        >
            <Typography sx={{ textAlign: dataTextAlign, color: dataTextColor }}>
                {data}
            </Typography>
        </Box>
    );
};
