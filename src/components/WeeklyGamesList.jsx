import React from 'react';
import { GameDayBox } from './GameDayBox';
// import { palette } from '../assets/theme.js';
import { Box, Card, CardContent } from '@mui/material';

export const WeeklyGamesList = ({ isMobileSize }) => {
    return (
        <Card
            sx={{
                padding: 2,
                backgroundColor: 'white',
            }}
        >
            <CardContent>
                <Box
                    sx={{
                        flexDirection: 'column',
                        maxWidth: '900px',
                    }}
                >
                    <GameDayBox day='Monday' />
                    <GameDayBox day='Tuesday' />
                    <GameDayBox day='Wednesday' />
                    <GameDayBox day='Thursday' />
                    <GameDayBox day='Friday' />
                    <GameDayBox day='Saturday' />
                    <GameDayBox day='Sunday' />
                </Box>
            </CardContent>
        </Card>
    );
};
