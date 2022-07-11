import { ThemeProvider } from '@emotion/react';
import { Button, CssBaseline, Grid, useMediaQuery } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { darkTheme } from './assets/theme';
import './index.css';
import { HeaderAppBar } from './components/HeaderAppBar';
import { SplashBackground } from './components/SplashBackground';
import { ReactComponent as SkatersPuck } from './assets/img/skatersPuck.svg';
import { ReactComponent as GoaliesPuck } from './assets/img/goaliesPuck.svg';
import { ReactComponent as SchedulePuck } from './assets/img/schedulePuck.svg';
// import { App } from './App';

const Landing = () => {
    const isMobileSize = useMediaQuery('(max-width:600px)');

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <HeaderAppBar isMobileSize={isMobileSize} />
            <Grid
                container
                alignItems='center'
                sx={{
                    marginTop: '20vh',
                    minHeight: '80vh',
                    maxWidth: '100%',
                }}
            >
                <Grid item xs={12}>
                    <SplashBackground />
                </Grid>
                <Grid item xs={4} align='center'>
                    <Button
                        sx={{
                            bgcolor: 'transparent',
                        }}
                    >
                        <SkatersPuck />
                    </Button>
                </Grid>
                <Grid item xs={4} align='center'>
                    <Button
                        sx={{
                            bgcolor: 'transparent',
                        }}
                    >
                        <GoaliesPuck />
                    </Button>
                </Grid>
                <Grid item xs={4} align='center'>
                    <Button
                        sx={{
                            bgcolor: 'transparent',
                        }}
                    >
                        <SchedulePuck />
                    </Button>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Landing />} />
        </Routes>
    </BrowserRouter>,
);
