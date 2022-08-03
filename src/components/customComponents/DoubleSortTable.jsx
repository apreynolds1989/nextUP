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
            }}
        >
            <Button onClick={toggleSort}>
                <Typography sx={{ paddingRight: '5px' }}>
                    {columnName}
                </Typography>
                {sortStatus === 'asc' && <FontAwesomeIcon icon={faAngleUp} />}
                {sortStatus === 'desc' && (
                    <FontAwesomeIcon icon={faAngleDown} />
                )}
            </Button>
        </Box>
    );
};
