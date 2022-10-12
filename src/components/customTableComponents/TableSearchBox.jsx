import { Box, IconButton, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { searchFilter } from './utilities/filterFunctions';

export const TableSearchBox = ({
    rowConfig,
    filteringArr,
    setRowOrder,
    searchArr,
}) => {
    const [searchInput, setSearchInput] = useState();

    const handleSearch = () => {
        filteringArr.length === 0
            ? setRowOrder(searchFilter(rowConfig, searchInput))
            : setRowOrder(searchFilter(searchArr, searchInput));
    };

    return (
        <Box>
            <TextField
                placeholder='Search...'
                id='searchInput'
                name='searchInput'
                variant='outlined'
                color='secondary'
                size='small'
                onChange={(choice) => setSearchInput(choice.target.value)}
            />
            <IconButton aria-label='search' size='small' onClick={handleSearch}>
                <SearchIcon />
            </IconButton>
        </Box>
    );
};
