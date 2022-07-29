import { Box } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { GameDayBox } from './GameDayBox';

export const WeeklyGamesList = () => {
    return (
        <Container>
            <GameDayBox day='Monday' />
            <GameDayBox day='Tuesday' />
            <GameDayBox day='Wednesday' />
            <GameDayBox day='Thursday' />
            <GameDayBox day='Friday' />
            <GameDayBox day='Saturday' />
            <GameDayBox day='Sunday' />
        </Container>
    );
};
