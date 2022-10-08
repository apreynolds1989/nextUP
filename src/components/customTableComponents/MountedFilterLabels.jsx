import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { useEffect } from 'react';
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
        console.log(newArr);
        newArr.splice(index, 1);
        setFilteringArr(newArr);
        setForceRerender(!forceRerender);
    };

    useEffect(() => {});

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
                        }}
                    >
                        {elementArr[0]} {elementArr[1]} {elementArr[2]}
                    </Typography>
                    <IconButton
                        aria-label='delete'
                        size='small'
                        onClick={() => handleFilterUnmount(filteringArr, index)}
                    >
                        <ClearOutlinedIcon />
                    </IconButton>
                </Box>
            ))}
        </Box>
    );
};
