import React from 'react';
import { Box, Button, Typography } from '@mui/material';

export const BannerToggleButton = ({ background, title }) => {
    return (
        <Button>
            <Box
                sx={{
                    boxShadow: 1,
                    ...background,
                }}
            >
                <Typography
                    variant='h4'
                    sx={{
                        paddingX: 7,
                        paddingY: 3,
                        textAlign: 'center',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                    }}
                >
                    {title}
                </Typography>
            </Box>
        </Button>
    );
};
