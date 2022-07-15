import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
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
            <Grid item xs={12}>
                <Typography
                    variant='h1'
                    sx={{
                        color: palette.gtWhite,
                    }}
                >
                    NextUP
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
