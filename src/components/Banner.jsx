import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { bannerSX } from '../assets/theme';
import { palette } from '../assets/theme';

export const Banner = ({ title }) => {
    return (
        <Container sx={bannerSX}>
            <Box>
                <Typography
                    variant='h1'
                    sx={{
                        paddingX: 10,
                        paddingTop: 5,
                        color: palette.gtRed,
                    }}
                >
                    {title}
                </Typography>
            </Box>
        </Container>
    );
};
