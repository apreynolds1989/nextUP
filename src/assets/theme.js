import { createTheme } from '@mui/material';
import '@fontsource/lato';
import whiteSkaterBackground from '../assets/img/whiteSkater.png';
import whiteGoalieMaskBackground from '../assets/img/whiteGoalieMask.png';
import skaterBackground from '../assets/img/skaterBackground.png';
import goalieBackground from '../assets/img/goalieBackground.png';
import scheduleBackground from '../assets/img/calendar.png';

export const palette = {
    gtWhite: '#ddddde',
    gtRed: '#c92323',
    gtBlue: '#252565',
};

export const gtTheme = createTheme({
    palette: {
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
            color: palette.gtBlue,
        },
        h1: {
            letterSpacing: '-2px',
            fontStyle: 'italic',
        },
        h2: {
            fontStyle: 'italic',
        },
        h3: {
            fontStyle: 'italic',
        },
        h4: {
            textDecoration: 'underline',
            fontStyle: 'italic',
        },
    },
});

export const landingTheme = createTheme({
    typography: {
        fontFamily: ['lato', 'sans-serif'].join(','),
        allVariants: {
            color: palette.gtWhite,
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

export const playersSx = {
    skatersPopContainer: {
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
    goaliesPopContainer: {
        backgroundImage: `url(${whiteGoalieMaskBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        backgroundSize: 'cover',
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

export const tableContainer = {
    borderRadius: 5,
    margin: 0,
    minWidth: '100vw',
    minHeight: '85vh',
    backgroundColor: `${palette.gtBlue}15`,
};

export const bannerSX = {
    minWidth: '100vw',
    marginTop: 18,
    marginBottom: 8,
    marginX: 0,
    paddingBottom: 5,
};

export const bannerSkaterBackground = {
    backgroundImage: `url(${skaterBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-110px -35px',
    backgroundSize: '480px',
};

export const bannerGoalieBackground = {
    backgroundImage: `url(${goalieBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-80px -35px',
    backgroundSize: '480px',
};

export const bannerScheduleBackground = {
    backgroundImage: `url(${scheduleBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-80px -35px',
    backgroundSize: '480px',
};

export const scheduleTableHeaderSx = {
    backgroundColor: palette.gtWhite,
    borderRight: '1px solid black',
    borderBottom: '1px solid black',
    textAlign: 'center',
    minWidth: '125px',
    color: palette.gtRed,
    fontWeight: 'bold',
    fontSize: 16,
};

export const scheduleTableCellsSx = {
    borderRight: '1px solid black',
    // borderBottom: '1px solid black',
    textAlign: 'center',
    minWidth: '125px',
    color: palette.gtBlue,
};