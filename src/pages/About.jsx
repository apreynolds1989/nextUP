import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import {
    palette,
    tableContainer,
    outerCardSx,
    innerCardSx,
} from '../assets/theme';
import podium from '../assets/img/podium.jpg';

export const About = () => {
    return (
        <Card sx={tableContainer}>
            <CardContent>
                <Box
                    sx={{
                        maxWidth: '80vw',
                        margin: 'auto',
                        marginTop: 20,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                alignItems: 'flex-start',
                                marginRight: 10,
                            }}
                        >
                            <AboutUsTitleCard />
                        </Box>
                        <Box
                            sx={{
                                flexDirection: 'column',

                                maxWidth: '600px',
                            }}
                        >
                            <Box
                                sx={{
                                    marginBottom: 10,
                                }}
                            >
                                <WhoAmICard />
                            </Box>
                            <Box
                                sx={{
                                    marginBottom: 7,
                                }}
                            >
                                <WhyNextUpCard />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

const AboutUsTitleCard = () => {
    return (
        <Card
            sx={{
                ...outerCardSx,
            }}
        >
            <Card
                sx={{
                    ...innerCardSx,
                }}
            >
                <CardContent>
                    <Box
                        sx={{
                            flexDirection: 'column',
                            paddingX: 5,
                        }}
                    >
                        <Typography variant='h2' sx={{ paddingLeft: 3 }}>
                            <span style={{ color: palette.gtRed }}>About</span>{' '}
                            Us
                        </Typography>
                        <img
                            src={podium}
                            alt='Podium with first second and third'
                            width={500}
                            style={{
                                borderRadius: 10,
                            }}
                        ></img>
                    </Box>
                </CardContent>
            </Card>
        </Card>
    );
};

const WhoAmICard = () => {
    return (
        <Card
            sx={{
                ...outerCardSx,
            }}
        >
            <Card
                sx={{
                    ...innerCardSx,
                }}
            >
                <CardContent>
                    <Typography
                        variant='h4'
                        sx={{
                            marginBottom: 1,
                        }}
                    >
                        <span style={{ color: palette.gtRed }}>Who</span> Am I ?
                    </Typography>
                    <Typography
                        variant='body1'
                        sx={{
                            marginBottom: 1,
                        }}
                    >
                        I'm Andrew. I have been playing fantasy hockey for as
                        long as I can remember. I mainly use Yahoo Fantasy
                        Sports but have used Fantrax as well. I love to play and
                        I love to win.
                    </Typography>
                </CardContent>
            </Card>
        </Card>
    );
};

const WhyNextUpCard = () => {
    return (
        <Card
            sx={{
                ...outerCardSx,
            }}
        >
            <Card
                sx={{
                    ...innerCardSx,
                }}
            >
                <CardContent>
                    <Typography
                        variant='h4'
                        sx={{
                            marginBottom: 1,
                        }}
                    >
                        <span style={{ color: palette.gtRed }}>Why</span> NextUP
                        ?
                    </Typography>
                    <Typography
                        variant='body1'
                        sx={{
                            marginBottom: 1,
                        }}
                    >
                        I love to win. I have found that winning requires
                        putting in the work and for Fantasy Hockey work means
                        streaming players. Let me do most of that work for you.
                        NextUP tracks which teams are playing the most games
                        each week (following the standard Monday through Sunday
                        schedule). NextUP also tracks which players are playing
                        the most off-day games (Monday, Wednesday, Friday and
                        Sunday). All you need to do is consult the list, consult
                        your team and make the moves. It couldn't be any easier.
                    </Typography>
                </CardContent>
            </Card>
        </Card>
    );
};
