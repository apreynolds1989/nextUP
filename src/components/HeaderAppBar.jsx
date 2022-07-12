import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
    AppBar,
    Container,
    Toolbar,
    Box,
    Button,
    useTheme,
} from '@mui/material';

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
    const theme = useTheme();

    return (
        <AppBar position='fixed' style={{ backgroundColor: theme.white }}>
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
                                color='blue'
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
                                                ? theme.red
                                                : theme.blue,
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
