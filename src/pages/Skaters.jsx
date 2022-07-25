import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { playersSx } from '../assets/theme';
import { Container } from '@mui/system';

export const Skaters = () => {
    return (
        <Card sx={playersSx.outerCard}>
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
                <Container
                    disableGutters
                    sx={{
                        marginX: 0,
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <Container
                        sx={{
                            minWidth: '1000px',
                            border: '2px solid red',
                        }}
                    >
                        Table to come
                    </Container>
                    <Container sx={playersSx.skatersPopContainer}></Container>
                </Container>
            </CardContent>
        </Card>
    );
};

// PLAYER IMAGES:

// http://nhl.bamcontent.com/images/headshots/current/168x168/{player_id}.jpg
