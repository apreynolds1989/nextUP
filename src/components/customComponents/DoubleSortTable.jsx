import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { Box, Typography } from '@mui/material';

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

    return (
        <Box
            sx={{
                display: 'flex',
            }}
        >
            <Typography>{columnName}</Typography>
            <FontAwesomeIcon icon={faAngleUp} />
            <FontAwesomeIcon icon={faAngleDown} />
        </Box>
    );
};
