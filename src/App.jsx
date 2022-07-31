import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { gtTheme } from './assets/theme';
import { Landing } from './pages/Landing';
import './index.css';
import { CssBaseline, useMediaQuery } from '@mui/material';
import { HeaderAppBar } from './components/HeaderAppBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Skaters } from './pages/Skaters';
import { Footer } from './components/Footer';
import { Goalies } from './pages/Goalies';
import { Schedule } from './pages/Schedule';
import { About } from './pages/About';

export const App = () => {
    const isMobileSize = useMediaQuery('(max-width:600px)');

    return (
        <ThemeProvider theme={gtTheme}>
            <CssBaseline />
            <BrowserRouter>
                <HeaderAppBar isMobileSize={isMobileSize} />
                <Routes>
                    <Route path='/nextUP/' element={<Landing />} />
                    <Route path='nextUP/skaters' element={<Skaters />} />
                    <Route path='nextUP/goalies' element={<Goalies />} />
                    <Route path='nextUP/schedule' element={<Schedule />} />
                    <Route path='nextUP/about' element={<About />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </ThemeProvider>
    );
};

// deploy
