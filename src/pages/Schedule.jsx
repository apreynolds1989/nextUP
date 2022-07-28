import React from 'react';
import { bannerScheduleBackground, tableContainer } from '../assets/theme';
import { Container } from '@mui/system';
import { Banner } from '../components/Banner';

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
                    Schedule to come
                </Container>
            </Container>
        </>
    );
};
