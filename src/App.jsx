import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './assets/theme';
import { Landing } from './components/Landing';
import './index.css';
import { CssBaseline, useMediaQuery } from '@mui/material';
import { HeaderAppBar } from './components/HeaderAppBar';

export const App = () => {
    const isMobileSize = useMediaQuery('(max-width:600px)');

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <HeaderAppBar isMobileSize={isMobileSize} />
            <Landing />
        </ThemeProvider>
    );
};
