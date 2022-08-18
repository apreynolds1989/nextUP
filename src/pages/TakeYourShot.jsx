import React from 'react';
import { ThemeProvider } from '@emotion/react';
import {
    Button,
    Grid,
    Container,
    Typography,
    CssBaseline,
} from '@mui/material';
import { NextUpLogo } from '../components/NextUpLogo';
import { SplashBackground } from '../components/SplashBackground';
import { SkatersPuck } from '../components/SkatersPuck';
import { GoaliesPuck } from '../components/GoaliesPuck';
import { SchedulePuck } from '../components/SchedulePuck';
import { Link } from 'react-router-dom';
import { landingTheme } from '../assets/theme';

export const TakeYourShot = () => {
    return (
        <ThemeProvider theme={landingTheme}>
            <CssBaseline />
            <Grid
                container
                alignItems='center'
                sx={{
                    minHeight: '100vh',
                    maxWidth: '100%',
                }}
            >
                <Grid item xs={12} align='center'>
                    <Container
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            maxHeight: '30vh',
                        }}
                    >
                        <NextUpLogo width={300} height={200} />
                    </Container>
                    <Typography
                        variant='h5'
                        sx={{
                            fontWeight: 'bold',
                        }}
                    >
                        Take your shot.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <SplashBackground />
                </Grid>
                <Grid item xs={4} align='center'>
                    <Button
                        sx={{
                            bgcolor: 'transparent',
                        }}
                    >
                        <Link to='/nextUP/'>
                            <SkatersPuck />
                        </Link>
                    </Button>
                </Grid>
                <Grid item xs={4} align='center'>
                    <Button
                        sx={{
                            bgcolor: 'transparent',
                        }}
                    >
                        <Link to='/nextUP/schedule'>
                            <SchedulePuck />
                        </Link>
                    </Button>
                </Grid>
                <Grid item xs={4} align='center'>
                    <Button
                        sx={{
                            bgcolor: 'transparent',
                        }}
                    >
                        <Link to='/nextUP/about'>
                            <GoaliesPuck />
                        </Link>
                    </Button>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};
