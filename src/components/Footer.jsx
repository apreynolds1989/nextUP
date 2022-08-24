import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { NextUpLogo } from './NextUpLogo';
import { palette } from '../assets/theme';
import { Typography } from '@mui/material';

const pages = [
    {
        title: 'Players',
        route: 'nextUP/',
    },
    {
        title: 'Schedule',
        route: 'nextUP/schedule',
    },
    {
        title: 'About',
        route: 'nextUP/about',
    },
];

export const Footer = ({ isMobileSize }) => {
    const location = useLocation();

    if (location.pathname === '/nextUp/takeYourShot') return null;

    return (
        <>
            <Box
                mx={0}
                sx={{
                    backgroundColor: 'black',
                    color: palette.gtWhite,
                }}
            >
                <Box
                    display='flex'
                    flexDirection='column'
                    padding={5}
                    paddingBottom={0}
                >
                    <Box
                        display='flex'
                        sx={{
                            flexDirection: {
                                xs: 'column-reverse',
                                md: 'row',
                            },
                            marginBottom: {
                                xs: 3,
                                md: 5,
                            },
                        }}
                        justifyContent='space-around'
                        alignItems='center'
                    >
                        <Box
                            display='flex'
                            flexDirection='column'
                            justifyContent='center'
                            alignItems='center'
                        >
                            <Link to='/nextUP/'>
                                <NextUpLogo width={150} height={100} />
                            </Link>
                            <Box
                                borderTop={1}
                                borderColor={palette.gtWhite}
                                sx={{ paddingX: 5 }}
                            >
                                {!isMobileSize && (
                                    <Link
                                        to='/nextUp/takeYourShot'
                                        style={{
                                            textDecoration: 'none',
                                            color: 'white',
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: isMobileSize
                                                    ? '12px'
                                                    : '14px',
                                                color: palette.gtWhite,
                                            }}
                                        >
                                            Take your shot.
                                        </Typography>
                                    </Link>
                                )}
                                {isMobileSize && (
                                    <Typography
                                        sx={{
                                            fontSize: isMobileSize
                                                ? '12px'
                                                : '14px',
                                            color: palette.gtWhite,
                                        }}
                                    >
                                        Take your shot.
                                    </Typography>
                                )}
                            </Box>
                        </Box>
                        <Box
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            borderColor={palette.gtWhite}
                            sx={{
                                borderBottom: {
                                    xs: 1,
                                    md: 0,
                                },
                                borderTop: {
                                    xs: 1,
                                    md: 0,
                                },
                                marginBottom: {
                                    xs: 2,
                                    md: 0,
                                },
                            }}
                        >
                            {pages.map((page, i, arr) => {
                                let borderSize;
                                if (arr.length - 1 === i) borderSize = 0;
                                else borderSize = 1;

                                return (
                                    <Button
                                        key={page.title}
                                        sx={{
                                            my: 2,
                                            display: 'block',
                                            fontSize: isMobileSize
                                                ? '12px'
                                                : '14px',
                                            borderRight: borderSize,
                                            borderColor: palette.gtWhite,
                                            borderRadius: 0,
                                        }}
                                    >
                                        <Link
                                            to={`/${page.route}`}
                                            style={{ color: palette.gtWhite }}
                                        >
                                            {page.title}
                                        </Link>
                                    </Button>
                                );
                            })}
                        </Box>
                    </Box>
                    <Box
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        mb={5}
                    >
                        <Typography
                            sx={{
                                fontSize: isMobileSize ? '10px' : '12px',
                                color: palette.gtWhite,
                            }}
                        >
                            Copyright &copy; 2022 - nextUP
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Outlet />
        </>
    );
};
