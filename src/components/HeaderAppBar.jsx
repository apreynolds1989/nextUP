import React from 'react';
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom';
import { AppBar, Container, Toolbar, Box, Button } from '@mui/material';
import { palette } from '../assets/theme';
import { NextUpLogo } from './NextUpLogo';

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

export const HeaderAppBar = ({ isMobileSize }) => {
    const location = useLocation();

    if (location.pathname === '/nextUP/takeYourShot') return null;

    return (
        <>
            <AppBar
                position='fixed'
                style={{ backgroundColor: palette.gtBlue }}
                sx={{
                    width: '100vw',
                }}
            >
                <Container maxWidth='xl'>
                    <Toolbar disableGutters>
                        {!isMobileSize && (
                            <Link to='/nextUP/'>
                                <NextUpLogo width={150} height={100} />
                            </Link>
                        )}
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: 'flex',
                                justifyContent: {
                                    xs: 'center',
                                    sm: 'flex-end',
                                },
                            }}
                        >
                            {pages.map((page) => (
                                <Button
                                    variant='contained'
                                    key={page.title}
                                    sx={{
                                        fontSize: {
                                            xs: '14px',
                                            sm: '18px',
                                        },
                                        marginX: 1,
                                        minWidth: '125px',
                                    }}
                                >
                                    <NavLink
                                        style={({ isActive }) => {
                                            return {
                                                my: 2,
                                                display: 'block',
                                                fontWeight: 'bold',
                                                textDecoration: 'none',
                                                color: isActive
                                                    ? palette.gtRed
                                                    : palette.gtWhite,
                                            };
                                        }}
                                        to={`/${page.route}`}
                                        key={page.title}
                                    >
                                        {page.title}
                                    </NavLink>
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Outlet />
        </>
    );
};
