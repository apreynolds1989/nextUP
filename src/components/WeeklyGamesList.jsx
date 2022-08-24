import React from 'react';
import { GameDayBox } from './GameDayBox';
// import { palette } from '../assets/theme.js';
import { Box, Card, CardContent } from '@mui/material';

export const WeeklyGamesList = ({ isMobileSize }) => {
    return (
        <Card
            sx={{
                padding: isMobileSize ? 0 : 2,
                backgroundColor: 'white',
                paddingBottom: 0,
            }}
        >
            <CardContent
                sx={{
                    padding: isMobileSize ? 0 : null,
                }}
            >
                <Box
                    sx={{
                        flexDirection: 'column',
                        maxWidth: '900px',
                    }}
                >
                    <GameDayBox isMobileSize={isMobileSize} day='Monday' />
                    <GameDayBox isMobileSize={isMobileSize} day='Tuesday' />
                    <GameDayBox isMobileSize={isMobileSize} day='Wednesday' />
                    <GameDayBox isMobileSize={isMobileSize} day='Thursday' />
                    <GameDayBox isMobileSize={isMobileSize} day='Friday' />
                    <GameDayBox isMobileSize={isMobileSize} day='Saturday' />
                    <GameDayBox isMobileSize={isMobileSize} day='Sunday' />
                </Box>
            </CardContent>
        </Card>
    );
};
