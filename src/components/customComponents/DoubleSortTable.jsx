import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { Box, Button, Typography } from '@mui/material';

export const DoubleSortTable = ({
    data,
    columnConfig,
    rowConfig,
    borderColor = 'black',
}) => {
    return (
        <Box
            sx={{
                display: 'table',
                // flexDirection: 'column',
                borderTop: `1px solid ${borderColor}`,
                borderLeft: `1px solid ${borderColor}`,
            }}
        >
            <DoubleSortTableHeader
                borderColor={borderColor}
                columnConfig={columnConfig}
            />
            <DoubleSortTableRows
                borderColor={borderColor}
                rowConfig={rowConfig}
            />
        </Box>
    );
};

const DoubleSortTableHeader = ({ columnConfig, borderColor }) => {
    return (
        <Box
            sx={{
                display: 'table-row',
            }}
        >
            {columnConfig.map((column, index) => (
                <ColumnHeaderText
                    {...column}
                    borderColor={borderColor}
                    key={`column${index}`}
                />
            ))}
        </Box>
    );
};

const ColumnHeaderText = ({
    columnName,
    initialSort = 'none',
    borderColor,
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

    return (
        <Box
            sx={{
                display: 'table-cell',
                borderRight: `1px solid ${borderColor}`,
                borderBottom: `1px solid ${borderColor}`,
            }}
        >
            <Button onClick={toggleSort}>
                <Typography sx={{ paddingRight: '10px' }}>
                    {columnName}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    {sortStatus === 'asc' ? (
                        <FontAwesomeIcon icon={faAngleUp} color='#000000' />
                    ) : (
                        <FontAwesomeIcon icon={faAngleUp} color='#00000025' />
                    )}
                    {sortStatus === 'desc' ? (
                        <FontAwesomeIcon icon={faAngleDown} color='#000000' />
                    ) : (
                        <FontAwesomeIcon icon={faAngleDown} color='#00000025' />
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

const DoubleSortTableRows = ({ rowConfig, borderColor }) => {
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
                    borderColor={borderColor}
                    key={`column${index}`}
                />
            ))}
        </Box>
    ));
};

const RowData = ({ data, borderColor }) => {
    return (
        <Box
            sx={{
                display: 'table-cell',
                borderRight: `1px solid ${borderColor}`,
                borderBottom: `1px solid ${borderColor}`,
            }}
        >
            <Typography>{data}</Typography>
        </Box>
    );
};
