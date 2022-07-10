import { Container } from '@mui/material';
import React from 'react';
import { ReactComponent as HockeyNet } from '../assets/img/hockeyNet.svg';

export const SplashBackground = () => {
    return (
        <Container
            sx={{
                display: 'flex',
                maxHeight: '40vh',
            }}
        >
            <HockeyNet />
        </Container>
    );
};
