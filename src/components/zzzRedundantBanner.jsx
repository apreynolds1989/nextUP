import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { bannerSX } from '../assets/theme';
import { DesignerSVG } from './DesignerSVG';
import { ShootingPuck } from './ShootingPuck';

export const Banner = ({ background, title }) => {
    return (
        <Container sx={{ ...background, ...bannerSX }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <Box
                    sx={{
                        flexDirection: 'column',
                    }}
                >
                    <Typography
                        variant='h1'
                        sx={{
                            paddingX: 10,
                            paddingTop: 5,
                        }}
                    >
                        {title}
                    </Typography>
                    <Box
                        sx={{
                            paddingLeft: 10,
                            display: 'flex',
                            flexDirection: 'row',
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
                <Box
                    sx={{
                        position: 'absolute',
                        top: '0px',
                        right: '25vw',
                    }}
                >
                    <DesignerSVG width={375} height={375} />
                </Box>
            </Box>
        </Container>
    );
};
