import { Box } from '@mui/material';
import React from 'react';
import { FilterColumnHeaderForms } from './FilterColumnHeaderForms';

export const FilterColumnHeaders = ({
    columnConfig,
    colsToHide,
    renderedProps,
}) => {
    return (
        <Box
            sx={{
                display: 'table-row',
                backgroundColor: renderedProps.headerBgColor,
            }}
        >
            {columnConfig.map((column, index) => (
                <FilterColumnHeaderForms
                    {...column}
                    columnConfig={columnConfig}
                    colsToHide={colsToHide}
                    colNum={index}
                    key={`column${index}`}
                    renderedProps={renderedProps}
                />
            ))}
        </Box>
    );
};
