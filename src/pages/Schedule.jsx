import React from 'react';
import { bannerScheduleBackground, tableContainer } from '../assets/theme';
import { Container } from '@mui/system';
import { Banner } from '../components/Banner';
import { WeeklyGamesList } from '../components/WeeklyGamesList';

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
                <Container
                    sx={{
                        minWidth: '1000px',
                        border: '2px solid red',
                    }}
                >
                    <WeeklyGamesList />
                </Container>
            </Container>
        </>
    );
};

// Team Logos
// https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/TEAMID.svg
