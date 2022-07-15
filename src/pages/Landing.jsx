import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { NextUpLogo } from '../components/NextUpLogo';
import { NextUpLogo2 } from '../components/NextUpLogo2';
import { NextUpLogo3 } from '../components/NextUpLogo3';
import { NextUpLogo4 } from '../components/NextUpLogo4';
import { SplashBackground } from '../components/SplashBackground';
import { SkatersPuck } from '../components/SkatersPuck';
import { GoaliesPuck } from '../components/GoaliesPuck';
import { SchedulePuck } from '../components/SchedulePuck';
import { Link } from 'react-router-dom';
import { palette } from '../assets/theme';

export const Landing = () => {
    return (
        <Grid
            container
            alignItems='center'
            sx={{
                minHeight: '100vh',
                maxWidth: '100%',
            }}
        >
            <Grid item xs={12} align='center'>
                <Typography
                    variant='h1'
                    sx={{
                        color: palette.gtWhite,
                    }}
                >
                    <NextUpLogo4 />
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
                    <Link to='skaters'>
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
    );
};
