import React from 'react';
import { bannerScheduleBackground, tableContainer } from '../assets/theme';
import { Box } from '@mui/material';
import { Container } from '@mui/system';
import { Banner } from '../components/Banner';
import { WeeklyGamesList } from '../components/WeeklyGamesList';
import { TeamWeeklyGamesList } from '../components/TeamWeeklyGamesList';

export const Schedule = () => {
    return (
        <>
            <Banner background={bannerScheduleBackground} title='SCHEDULE' />
            <Container
                disableGutters
                sx={{
                    marginX: 0,
                    display: 'flex',
                    flexDirection: 'row',
                    ...tableContainer,
                }}
            >
                <Box
                    sx={{
                        margin: 'auto',
                        minWidth: '750px',
                        marginY: 5,
                        paddingBottom: 2,
                    }}
                >
                    <WeeklyGamesList />
                    <TeamWeeklyGamesList />
                </Box>
            </Container>
        </>
    );
};

// Team Logos
// https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/TEAMID.svg
