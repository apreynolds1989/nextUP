import { Box, IconButton, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { searchFilter } from './utilities/filterFunctions';

export const TableSearchBox = ({ rowConfig, rowOrder, setRowOrder }) => {
    const [searchInput, setSearchInput] = useState();

    //! Currently no way to return to preSearch data other than refreshing page

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
            <IconButton
                aria-label='search'
                size='small'
                onClick={() => setRowOrder(searchFilter(rowOrder, searchInput))}
            >
                <SearchIcon />
            </IconButton>
        </Box>
    );
};
