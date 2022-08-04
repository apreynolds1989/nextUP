import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { Box, Button, Typography } from '@mui/material';

export const DoubleSortTable = ({
    borderColor = 'black',
    columnConfig,
    rowConfig,
    outerBorder = `2px solid ${borderColor}`,
    headerInnerBorder = `2px solid ${borderColor}`,
    rowEndBorder = `2px solid ${borderColor}`,
    rowBottomBorder = `2px solid ${borderColor}`,
    headerTextColor = 'black',
    headerArrowColor = 'black',
    dataTextColor = 'black',
    colsToHide = [],
}) => {
    return (
        <Box
            sx={{
                display: 'table',
                border: outerBorder,
                // borderTop: `1px solid ${borderColor}`,
                // borderLeft: `1px solid ${borderColor}`,
            }}
        >
            <DoubleSortTableHeader
                headerInnerBorder={headerInnerBorder}
                columnConfig={columnConfig}
                colsToHide={colsToHide}
                headerTextColor={headerTextColor}
                headerArrowColor={headerArrowColor}
            />
            <DoubleSortTableRows
                rowEndBorder={rowEndBorder}
                rowBottomBorder={rowBottomBorder}
                rowConfig={rowConfig}
                colsToHide={colsToHide}
                dataTextColor={dataTextColor}
            />
        </Box>
    );
};

const DoubleSortTableHeader = ({
    columnConfig,
    colsToHide,
    headerInnerBorder,
    headerTextColor,
    headerArrowColor,
}) => {
    return (
        <Box
            sx={{
                display: 'table-row',
            }}
        >
            {columnConfig.map((column, index) => (
                <ColumnHeaderText
                    {...column}
                    columnConfig={columnConfig}
                    colsToHide={colsToHide}
                    headerInnerBorder={headerInnerBorder}
                    headerTextColor={headerTextColor}
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
            <Button onClick={toggleSort}>
                <Typography
                    sx={{
                        paddingRight: '10px',
                        textAlign: 'center',
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
    dataTextColor,
}) => {
    return rowConfig.map((rows, index) => (
        <Box
            sx={{
                display: 'table-row',
                flexDirection: 'row',
            }}
            key={`row${index}`}
        >
            {rows.map((row, index) => (
                <RowData
                    {...row}
                    rowConfig={rowConfig}
                    colsToHide={colsToHide}
                    rowEndBorder={rowEndBorder}
                    rowBottomBorder={rowBottomBorder}
                    dataTextColor={dataTextColor}
                    colNum={index}
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
    rowConfig,
    rowEndBorder,
    rowBottomBorder,
    dataTextColor,
}) => {
    const colDisplay = colsToHide.includes(colNum) ? 'none' : 'table-cell';
    const endBorder = colNum === rowConfig.length - 1 ? '0px' : rowEndBorder;

    return (
        <Box
            sx={{
                display: colDisplay,
                borderRight: endBorder,
                borderBottom: rowBottomBorder,
            }}
        >
            <Typography sx={{ textAlign: 'center', color: dataTextColor }}>
                {data}
            </Typography>
        </Box>
    );
};
