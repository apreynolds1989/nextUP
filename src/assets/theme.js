import { createTheme } from '@mui/material';
import '@fontsource/lato';
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
        h6: {
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

export const tableContainer = {
    borderRadius: 5,
    margin: 0,
    minWidth: '100vw',
    minHeight: '85vh',
    backgroundColor: `${palette.gtBlue}15`,
};

export const bannerSX = {
    minWidth: '100vw',
    marginTop: 16,
    marginBottom: 0,
    marginX: 0,
    paddingBottom: 3,
};

export const bannerSkaterBackground = {
    backgroundImage: `url(${skaterBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-5px 5px',
    backgroundSize: '75px',
};

export const bannerGoalieBackground = {
    backgroundImage: `url(${goalieBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '115px 5px',
    backgroundSize: '75px',
};

export const bannerScheduleBackground = {
    backgroundImage: `url(${scheduleBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0px -20px',
    backgroundSize: '250px',
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

export const outerCardSx = {
    borderRadius: 3,
    padding: 1,
    backgroundColor: palette.gtBlue,
};

export const innerCardSx = {
    borderRadius: 5,
};