import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AppBar, Container, Toolbar, Box, Button } from '@mui/material';

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
        title: 'Contact',
        route: 'Contact',
    },
];

export const HeaderAppBar = ({ isMobileSize }) => {
    return (
        <AppBar position='fixed' style={{ backgroundColor: 'primary' }}>
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
                                key={page.title}
                                sx={{
                                    fontSize: {
                                        xs: '14px',
                                        sm: '18px',
                                    },
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
                                                ? 'red.main'
                                                : 'blue.main',
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
    );
};
