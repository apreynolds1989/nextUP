import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
    palette: {
        background: {
            default: '#252565',
        },
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#c92323',
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