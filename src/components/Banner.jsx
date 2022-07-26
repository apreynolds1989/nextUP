import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { bannerSX } from '../assets/theme';
import { palette } from '../assets/theme';
import { DesignerSVG } from './DesignerSVG';

export const Banner = ({ title }) => {
    return (
        <Container sx={bannerSX}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <Typography
                    variant='h1'
                    sx={{
                        paddingX: 10,
                        paddingTop: 5,
                        color: palette.gtBlue,
                    }}
                >
                    {title}
                </Typography>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '0px',
                        right: '25vw',
                    }}
                >
                    <DesignerSVG width={375} height={375} />
                </Box>
            </Box>
        </Container>
    );
};
