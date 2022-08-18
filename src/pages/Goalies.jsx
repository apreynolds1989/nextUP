import React from 'react';
import { bannerGoalieBackground, tableContainer } from '../assets/theme';
import { Container } from '@mui/system';
import { Banner } from '../components/zzzRedundantBanner';

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
            </Container>
        </>
    );
};
