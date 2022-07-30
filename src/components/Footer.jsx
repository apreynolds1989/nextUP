import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { NextUpLogo } from './NextUpLogo';
import { palette } from '../assets/theme';

const pages = [
    {
        title: 'Home',
        route: 'nextUP/',
    },
    {
        title: 'Skaters',
        route: 'Skaters',
    },
    {
        title: 'Goalies',
        route: 'Goalies',
    },
    {
        title: 'Schedule',
        route: 'Schedule',
    },
    {
        title: 'About',
        route: 'About',
    },
];

export const Footer = () => {
    const location = useLocation();

    if (location.pathname === '/nextUP/') return null;

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
                        }}
                        justifyContent='space-around'
                        alignItems='center'
                        mb={5}
                    >
                        <Box
                            display='flex'
                            flexDirection='column'
                            justifyContent='center'
                            alignItems='center'
                        >
                            <Link to='/game-tracker-v2/'>
                                <NextUpLogo width={150} height={100} />
                            </Link>
                            <Box
                                borderTop={1}
                                borderColor={palette.gtWhite}
                                sx={{ paddingX: 5 }}
                            >
                                <small>Take your shot.</small>
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
                                    xs: 5,
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
                                            fontSize: '14px',
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
                        <small>Copyright &copy; 2022 - Next UP</small>
                    </Box>
                </Box>
            </Box>
            <Outlet />
        </>
    );
};
