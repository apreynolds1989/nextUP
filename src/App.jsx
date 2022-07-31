import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { gtTheme } from './assets/theme';
import './index.css';
import { CssBaseline, useMediaQuery } from '@mui/material';
import { Routing } from './Routing';

export const App = () => {
    const isMobileSize = useMediaQuery('(max-width:600px)');

    return (
        <ThemeProvider theme={gtTheme}>
            <CssBaseline />
            <Routing isMobileSize={isMobileSize} />
        </ThemeProvider>
    );
};

// deploy
