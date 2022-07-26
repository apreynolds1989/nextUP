import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { pagesOuterCard } from '../assets/theme';
import { Container } from '@mui/system';

export const Schedule = () => {
    return (
        <Card sx={pagesOuterCard}>
            <CardContent>
                <Typography
                    variant='h1'
                    sx={{
                        paddingX: 10,
                        paddingTop: 5,
                    }}
                >
                    SCHEDULE
                </Typography>
                <Container
                    disableGutters
                    sx={{
                        marginX: 0,
                        display: 'flex',
                        flexDirection: 'row',
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
            </CardContent>
        </Card>
    );
};
