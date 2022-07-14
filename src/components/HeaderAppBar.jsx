import React from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import { AppBar, Container, Toolbar, Box, Button } from '@mui/material';
import { palette } from '../assets/theme';

const pages = [
    {
        title: 'Home',
        route: '',
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

export const HeaderAppBar = ({ isMobileSize }) => {
    return (
        <>
            <AppBar
                position='fixed'
                style={{ backgroundColor: palette.gtWhite }}
            >
                <Container maxWidth='xl'>
                    <Toolbar disableGutters>
                        {!isMobileSize && <Link to='/'>GAME TRACKER</Link>}
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
