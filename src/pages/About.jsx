import React from 'react';
import { Box, Card, CardContent, Link, Typography } from '@mui/material';
import { palette, podiumCardSx } from '../assets/theme';

export const About = ({ isMobileSize }) => {
    const dynamicProps = isMobileSize ? null : podiumCardSx;
    return (
        <Card sx={{ ...dynamicProps }}>
            <CardContent>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        maxWidth: isMobileSize ? '100vw' : '80vw',
                        marginX: isMobileSize ? 0 : 'auto',
                        marginTop: isMobileSize ? 7 : 18,
                        marginBottom: isMobileSize ? 0 : 50,
                    }}
                >
                    <AboutUsTitleCard isMobileSize={isMobileSize} />
                </Box>
            </CardContent>
        </Card>
    );
};

const AboutUsTitleCard = ({ isMobileSize }) => {
    return (
        <Card
            sx={{
                maxWidth: '1000px',
                minHeight: isMobileSize ? '100vh' : null,
                backgroundColor: palette.gtWhite,
                borderRadius: isMobileSize ? 0 : 5,
            }}
        >
            <CardContent>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        paddingTop: isMobileSize ? 3 : 1,
                        paddingX: 3,
                    }}
                >
                    <Typography variant='h3'>
                        <span style={{ color: palette.gtBlue }}>What is </span>
                        <span style={{ color: palette.gtRed }}>nextUP ?</span>
                    </Typography>
                    <DescriptionCard />
                </Box>
            </CardContent>
        </Card>
    );
};

const DescriptionCard = () => {
    return (
        <Card
            sx={{
                maxWidth: '900px',
                borderRadius: 5,
                padding: 2,
                marginX: 'auto',
                backgroundColor: palette.gtWhite,
            }}
        >
            <CardContent>
                <Typography
                    variant='body1'
                    sx={{
                        marginBottom: 1,
                        fontWeight: 'bold',
                    }}
                >
                    nextUP is a web app which tracks how many games every active
                    NHL player will play in the given week (running from Monday
                    through Sunday), as well as their Off-Day Games (Monday,
                    Wednesday, Friday, Sunday). A wide variety of stats are
                    displayed in the tables to assist in deciding which players
                    to add each week. nextUP makes extensive use of the
                    undocumented NHL API thanks in large part to{' '}
                    <Link href='https://gitlab.com/dword4/nhlapi'>
                        Drew Hynes
                    </Link>{' '}
                    for his attempt at documentation.
                </Typography>
                <Typography
                    variant='body1'
                    sx={{
                        marginBottom: 1,
                        fontWeight: 'bold',
                    }}
                >
                    Player "streaming" is a well established strategy in fantasy
                    hockey. Those that put in the work are often rewarded. Let
                    nextUP do the work for you. The data is right here, you get
                    the final decision.
                </Typography>
            </CardContent>
        </Card>
    );
};
