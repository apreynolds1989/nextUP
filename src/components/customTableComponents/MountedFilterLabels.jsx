import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

export const MountedFilterLabels = ({ arr, renderedProps }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
            }}
        >
            {arr.map((elementArr, index) => (
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
                    <IconButton aria-label='delete' size='small'>
                        <ClearOutlinedIcon />
                    </IconButton>
                </Box>
            ))}
        </Box>
    );
};
