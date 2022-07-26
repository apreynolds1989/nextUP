import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { pagesOuterCard } from '../assets/theme';
import { palette } from '../assets/theme';
import podium from '../assets/img/podium.jpg';

export const About = () => {
    return (
        <Card sx={pagesOuterCard}>
            <CardContent>
                <Box
                    sx={{
                        maxWidth: '1200px',
                        margin: 'auto',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            paddingLeft: 5,
                            marginY: 5,
                        }}
                    >
                        <Typography variant='h3'>
                            <span style={{ color: palette.gtRed }}>About</span>{' '}
                            Us
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box
                            sx={{
                                paddingX: 5,
                            }}
                        >
                            <img
                                src={podium}
                                alt='Podium with first second and third'
                                width={500}
                                style={{
                                    borderRadius: 10,
                                }}
                            ></img>
                        </Box>
                        <Box
                            sx={{
                                flexDirection: 'column',
                                paddingX: 5,
                                maxWidth: '600px',
                            }}
                        >
                            <Typography
                                variant='h4'
                                sx={{
                                    marginBottom: 1,
                                }}
                            >
                                <span style={{ color: palette.gtRed }}>
                                    Who
                                </span>{' '}
                                Am I ?
                            </Typography>
                            <Typography
                                variant='body1'
                                sx={{
                                    marginBottom: 1,
                                }}
                            >
                                I'm Andrew. I have been playing fantasy hockey
                                for as long as I can remember. I mainly use
                                Yahoo Fantasy Sports but have used Fantrax as
                                well. I love to play and I love to win.
                            </Typography>
                            <Typography
                                variant='h4'
                                sx={{
                                    marginBottom: 1,
                                }}
                            >
                                <span style={{ color: palette.gtRed }}>
                                    Why
                                </span>{' '}
                                NextUP ?
                            </Typography>
                            <Typography
                                variant='body1'
                                sx={{
                                    marginBottom: 1,
                                }}
                            >
                                I like to win. I have found that winning
                                requires putting in the work and for Fantasy
                                Hockey work means streaming players. Let me do
                                most of that work for you. NextUP tracks which
                                teams are playing the most games each week
                                (following the standard Monday through Sunday
                                schedule). NextUP also tracks which players are
                                playing the most off-day games (Monday,
                                Wednesday, Friday and Sunday). All you need to
                                do is consult the list, consult your team and
                                make the moves. It couldn't be any easier.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};
