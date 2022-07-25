import { createTheme } from '@mui/material';
import '@fontsource/lato';
import whiteSkaterBackground from '../assets/img/whiteSkater.png';

export const palette = {
    gtWhite: '#ddddde',
    gtRed: '#c92323',
    gtBlue: '#252565',
};

export const darkTheme = createTheme({
    palette: {
        background: {
            default: '#252565',
        },
        primary: {
            main: '#252565',
        },
        secondary: {
            main: '#c92323',
        },
        white: {
            main: '#ffffff',
        },
    },
    typography: {
        fontFamily: ['lato', 'sans-serif'].join(','),
        allVariants: {
            color: palette.gtWhite,
        },
        h1: {
            textDecoration: 'underline',
            fontStyle: 'italic',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: '#252565',
                    backgroundImage: `linear-gradient(180deg, #000000 0%, #252565 25%, #ffffff 100%)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: '100vh',
                },
            },
        },
    },
});

export const skatersSx = {
    outerCard: {
        borderRadius: 5,
        margin: 'auto',
        marginY: 15,
        minWidth: '90%',
        maxWidth: '500px',
        minHeight: '85vh',
        backgroundColor: `${palette.gtBlue}30`,
    },
    popContainer: {
        backgroundImage: `url(${whiteSkaterBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        // backgroundSize: 'cover',
        height: {
            xs: '200px',
            sm: '250px',
            md: '325px',
            lg: '400px',
            xl: '450px',
        },
        border: '2px solid green',
        minWidth: '400px',
    },
};