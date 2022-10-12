import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { useState } from 'react';

export const MountedFilterLabels = ({
    filteringArr,
    setFilteringArr,
    renderedProps,
}) => {
    // ? why no re-render with just setFilteringArr(newArr), but does re-render with setForceRerenderer

    const [forceRerender, setForceRerender] = useState(false);

    const handleFilterUnmount = (filteringArr, index) => {
        let newArr = filteringArr;
        newArr.splice(index, 1);
        setFilteringArr(newArr);
        setForceRerender(!forceRerender);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
            }}
        >
            {filteringArr.map((elementArr, index) => (
                <Box
                    key={`${elementArr[0]}${index}`}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        border: renderedProps.tableBorder,
                        borderRadius: renderedProps.outerRadius,
                        margin: 0.5,
                    }}
                >
                    <Typography
                        sx={{
                            paddingX: 1,
                            fontSize: {
                                xs: 12,
                                sm: 16,
                            },
                        }}
                    >
                        {elementArr[0]} {elementArr[1]} {elementArr[2]}
                    </Typography>
                    <IconButton
                        aria-label='delete'
                        onClick={() => handleFilterUnmount(filteringArr, index)}
                    >
                        <ClearOutlinedIcon
                            sx={{ fontSize: { xs: 14, sm: 18 } }}
                        />
                    </IconButton>
                </Box>
            ))}
        </Box>
    );
};
