import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { palette } from '../assets/theme';
import { skatersSx } from '../assets/theme';

export const Skaters = () => {
    return (
        <Card sx={skatersSx.outerCard}>
            <CardContent>
                <Typography
                    variant='h1'
                    sx={{
                        paddingX: 10,
                        paddingTop: 5,
                    }}
                >
                    SKATERS
                </Typography>
            </CardContent>
        </Card>
    );
};

// PLAYER IMAGES:

// http://nhl.bamcontent.com/images/headshots/current/168x168/{player_id}.jpg
