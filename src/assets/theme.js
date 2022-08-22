import { createTheme } from '@mui/material';
import '@fontsource/lato';
import skaterBackground from '../assets/img/skaterBackground.png';
import goalieBackground from '../assets/img/goalieBackground.png';
import scheduleBackground from '../assets/img/calendar.png';
import podium from '../assets/img/podium.jpg';

export const palette = {
    gtWhite: '#ddddde',
    gtRed: '#c92323',
    gtBlue: '#252565',
    gtGrey: '#ededf2',
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
    margin: 0,
    width: '100vw',
    marginX: 'auto',
    paddingBottom: 10,
    backgroundColor: `${palette.gtBlue}15`,
};

export const bannerSX = {
    width: '100vw',
    marginTop: 17,
    marginBottom: 0,
    marginX: 'auto',
    paddingBottom: 2,
};

export const bannerSxMobile = {
    width: '100vw',
    marginTop: 10,
    marginBottom: 0,
    marginX: 'auto',
    paddingBottom: 1,
};

export const bannerSkaterBackground = {
    backgroundImage: `url(${skaterBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-5px 5px',
    backgroundSize: '75px',
};

export const bannerSkaterBackgroundMobile = {
    backgroundImage: `url(${skaterBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0px 5px',
    backgroundSize: '60px',
};

export const bannerGoalieBackground = {
    backgroundImage: `url(${goalieBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '115px 5px',
    backgroundSize: '75px',
};

export const bannerGoalieBackgroundMobile = {
    backgroundImage: `url(${goalieBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '90px 5px',
    backgroundSize: '60px',
};

export const bannerScheduleBackground = {
    backgroundImage: `url(${scheduleBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-20vw -10vh',
    backgroundSize: 'contain',
};

export const podiumCardSx = {
    // width: '80vw',
    // height: '80vh',
    margin: 0,
    width: '100vw',
    marginX: 'auto',
    paddingBottom: 10,
    backgroundColor: `${palette.gtBlue}15`,
    backgroundImage: `url(${podium})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    // borderRadius: 3,
};

export const innerCardSx = {
    boxShadow: 0,
};