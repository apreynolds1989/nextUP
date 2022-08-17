import { Box, FormControl, Input, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';

export const FilterColumnHeaderForms = ({
    field,
    inputType,
    colNum,
    columnConfig,
    colsToHide,
    renderedProps,
}) => {
    const [filterOperator, setFilterOperator] = useState('equal');

    const handleChange = (event) => {
        setFilterOperator(event.target.value);
    };

    const ariaLabel = { 'aria-label': `${field} search box` };

    const colDisplay = colsToHide.includes(colNum) ? 'none' : 'table-cell';

    const endBorder =
        colNum === columnConfig.length - 1
            ? '0px'
            : renderedProps.headerInnerBorder || renderedProps.tableBorder;

    return (
        <Box
            sx={{
                display: colDisplay,
                padding: 1,
                borderRight: endBorder,
                // borderBottom:
                //     renderedProps
                //         .headerInnerBorder ||
                //     renderedProps.tableBorder,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                {inputType === 'number' && (
                    <>
                        <FormControl
                            size='small'
                            sx={{ minWidth: '65px', paddingRight: 1 }}
                        >
                            <Select
                                value={filterOperator}
                                autoWidth
                                onChange={handleChange}
                            >
                                <MenuItem value={'equal'}>&#61;</MenuItem>
                                <MenuItem value={'greaterThan'}>&#62;</MenuItem>
                                <MenuItem value={'greatThanOrEqual'}>
                                    &#62;&#61;
                                </MenuItem>
                                <MenuItem value={'lessThan'}>&#60;</MenuItem>
                                <MenuItem value={'lessThanOrEqual'}>
                                    &#60;&#61;
                                </MenuItem>
                            </Select>
                        </FormControl>
                        <Input
                            placeholder='Filter by:'
                            inputProps={ariaLabel}
                        />
                    </>
                )}
                {inputType === 'text' && (
                    <Input placeholder='Search...' inputProps={ariaLabel} />
                )}
            </Box>
        </Box>
    );
};
