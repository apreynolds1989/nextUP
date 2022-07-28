import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { Container, ThemeProvider } from '@mui/system';
import hockeyNetBackground from '../assets/img/hockeyNet.jpg';
import { landingTheme } from '../assets/theme';

export const NewLanding = () => {
    return (
        <ThemeProvider theme={landingTheme}>
            <CssBaseline />
            <Container
                disableGutters
                sx={{
                    minWidth: '100vw',
                    minHeight: '100vh',
                    margin: 0,
                    backgroundImage: `url(${hockeyNetBackground})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center center',
                }}
            >
                <Box
                    sx={{
                        minWidth: '100vw',
                    }}
                >
                    Hello World
                </Box>
            </Container>
        </ThemeProvider>
    );
};
