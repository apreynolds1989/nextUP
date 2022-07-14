import React from 'react';
import { Button, Grid } from '@mui/material';
import { SplashBackground } from './SplashBackground';
import { ReactComponent as SkatersPuck } from '../assets/img/skatersPuck.svg';
import { ReactComponent as GoaliesPuck } from '../assets/img/goaliesPuck.svg';
import { ReactComponent as SchedulePuck } from '../assets/img/schedulePuck.svg';

export const Landing = () => {
    return (
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
    );
};
