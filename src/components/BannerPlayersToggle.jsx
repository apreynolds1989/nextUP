import { Box, Button, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { bannerSX } from '../assets/theme';
import { BannerToggleButton } from './BannerToggleButton';
import { ShootingPuck } from './ShootingPuck';

export const BannerPlayersToggle = ({
    backgroundOne,
    titleOne,
    backgroundTwo,
    titleTwo,
}) => {
    return (
        <Container sx={{ ...bannerSX }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}
                >
                    <BannerToggleButton
                        background={backgroundOne}
                        title={titleOne}
                    />
                    <BannerToggleButton
                        background={backgroundTwo}
                        title={titleTwo}
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}
                >
                    <ShootingPuck width={50} height={50} />
                    <Typography
                        variant='body1'
                        sx={{
                            fontWeight: 'bold',
                            paddingLeft: 1,
                            alignSelf: 'center',
                        }}
                    >
                        Some text here briefly describing what this table is
                        for? Or maybe just a catchy line
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};
