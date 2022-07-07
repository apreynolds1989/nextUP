import { ThemeProvider } from '@emotion/react';
import { Box, Button, CssBaseline, Grid } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { darkTheme } from './assets/theme';
import './index.css';
import { SplashBackground } from './components/SplashBackground';
// import { App } from './App';

const Landing = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Grid
                container
                alignItems='center'
                sx={{
                    minHeight: '100vh',
                    maxWidth: '100%',
                }}
            >
                <Grid item xs={12}>
                    <SplashBackground />
                </Grid>
                <Grid item xs={4} align='center'>
                    <Button
                        sx={{
                            bgcolor: 'primary.main',
                            color: 'secondary.main',
                        }}
                    >
                        Skaters
                    </Button>
                </Grid>
                <Grid item xs={4} align='center'>
                    <Button
                        sx={{
                            bgcolor: 'secondary.main',
                            color: 'primary.main',
                        }}
                    >
                        Skaters
                    </Button>
                </Grid>
                <Grid item xs={4} align='center'>
                    <Button
                        sx={{
                            bgcolor: 'primary.main',
                            color: 'secondary.main',
                        }}
                    >
                        Skaters
                    </Button>
                </Grid>
            </Grid>
            {/* <SplashBackground />
            <Box>
                <Button
                    sx={{
                        bgcolor: 'primary.main',
                        color: 'secondary.main',
                    }}
                >
                    Skaters
                </Button>
            </Box>
            <Box>
                <Button
                    sx={{
                        bgcolor: 'secondary.main',
                        color: 'primary.main',
                    }}
                >
                    Goalies
                </Button>
            </Box>
            <Box>
                <Button
                    sx={{
                        bgcolor: 'primary.main',
                        color: 'secondary.main',
                    }}
                >
                    Schedule
                </Button>
            </Box> */}
        </ThemeProvider>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Landing />
    </React.StrictMode>,
);
