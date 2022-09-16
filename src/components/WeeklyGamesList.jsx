import React from 'react';
import { GameDayBox } from './GameDayBox';
// import { palette } from '../assets/theme.js';
import { Box, Card, CardContent } from '@mui/material';
import { weeklyGames } from '../assets/data/games';

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
                    {weeklyGames.map((day) => (
                        <GameDayBox
                            key={`games on ${day.date}`}
                            isMobileSize={isMobileSize}
                            day={day.date}
                            gamesArr={day.games}
                        />
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
};
