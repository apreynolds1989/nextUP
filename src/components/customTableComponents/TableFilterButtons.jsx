import { Box, Button } from '@mui/material';
import React from 'react';

// A filter button to open Filters row
export const TableFilterButtons = ({
    isFiltersOpen,
    toggleIsFiltersOpen,
    renderedProps,
}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                backgroundColor: renderedProps.headerBgColor,
                paddingRight: 1,
                paddingBottom: 1,
            }}
        >
            {!isFiltersOpen && (
                <Button onClick={toggleIsFiltersOpen}>Filters</Button>
            )}
            {isFiltersOpen && (
                <>
                    <Box
                        sx={{
                            borderRight:
                                renderedProps.headerInnerBorder ||
                                renderedProps.tableBorder,
                        }}
                    >
                        {/* this button will call function to set filters on table */}
                        <Button onClick={toggleIsFiltersOpen}>
                            Set Filters
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            borderRight:
                                renderedProps.headerInnerBorder ||
                                renderedProps.tableBorder,
                        }}
                    >
                        {/* this button will call function to reset filters on table */}
                        <Button onClick={toggleIsFiltersOpen}>
                            Reset Filters
                        </Button>
                    </Box>
                    <Box>
                        <Button onClick={toggleIsFiltersOpen}>
                            Close Filters
                        </Button>
                    </Box>
                </>
            )}
        </Box>
    );
};
