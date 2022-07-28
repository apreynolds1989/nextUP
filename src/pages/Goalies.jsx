import React from 'react';
import {
    bannerGoalieBackground,
    playersSx,
    tableContainer,
} from '../assets/theme';
import { Container } from '@mui/system';
import { Banner } from '../components/Banner';
import { Typography } from '@mui/material';

export const Goalies = () => {
    return (
        <>
            <Banner background={bannerGoalieBackground} title='GOALIES' />
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
                    Table to come
                </Container>
                <Container sx={playersSx.goaliesPopContainer}>
                    <Typography variant='h6'>Placeholder</Typography>
                </Container>
            </Container>
        </>
    );
};
