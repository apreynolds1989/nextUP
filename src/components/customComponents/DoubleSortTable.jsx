import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { Box, Button, Typography } from '@mui/material';

export const DoubleSortTable = ({ data, columnConfig }) => {
    return <DoubleSortTableHeader columnConfig={columnConfig} />;
};

const DoubleSortTableHeader = (columnConfig) => {
    console.log(columnConfig.columnConfig);
    return (
        <Box
            sx={{
                display: 'flex',
            }}
        >
            {columnConfig.columnConfig.map((column) => (
                <ColumnHeaderText {...column} />
            ))}
        </Box>
    );
};

const ColumnHeaderText = ({ columnName, initialSort = 'none' }) => {
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
                display: 'flex',
                border: '1px solid black',
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
