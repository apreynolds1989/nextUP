import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './assets/theme';
import { Landing } from './pages/Landing';
import './index.css';
import { CssBaseline, useMediaQuery } from '@mui/material';
import { HeaderAppBar } from './components/HeaderAppBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Skaters } from './pages/Skaters';

export const App = () => {
    const isMobileSize = useMediaQuery('(max-width:600px)');

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <BrowserRouter>
                <HeaderAppBar isMobileSize={isMobileSize} />
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='skaters' element={<Skaters />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};
