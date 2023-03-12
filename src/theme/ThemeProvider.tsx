import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const fontFamily = ['Roboto', 'sans-serif'].join(',');

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#ff385c',
        },
        secondary: {
            main: '#008489',
        },
        grey: {
            50: '#F0F0F0',
            100: '#E0E0E0',
            200: '#C2C2C2',
            300: '#A3A3A3',
            400: '#858585',
            500: '#666666',
            600: '#4D4D4D',
            700: '#333333',
            800: '#1A1A1A',
            900: '#0A0A0A',
        },
    },
    mixins: {},
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '50px',
                },
            },
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    typography: {
        fontFamily: fontFamily,
        fontSize: 10,
    },
});

//theme = responsiveFontSizes(theme);

theme.typography.h1 = {
    fontSize: '6rem',
    fontFamily: fontFamily,
    [theme.breakpoints.up('xs')]: {
        fontSize: '3rem',
    },
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '4rem',
    },
    [theme.breakpoints.between('md', 'lg')]: {
        fontSize: '5rem',
    },
    [theme.breakpoints.between('lg', 'xl')]: {
        fontSize: '5.5rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '6rem',
    },
};

theme.typography.h2 = {
    fontSize: '3.75rem',
    fontFamily: fontFamily,
    [theme.breakpoints.up('xs')]: {
        fontSize: '1.25rem',
    },
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '1.75rem',
    },
    [theme.breakpoints.between('md', 'lg')]: {
        fontSize: '2.5rem',
    },
    [theme.breakpoints.between('lg', 'xl')]: {
        fontSize: '3rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '3.75rem',
    },
};

theme.typography.h4 = {
    fontSize: '2.125rem',
    fontFamily: fontFamily,
    [theme.breakpoints.up('xs')]: {
        fontSize: '1.25rem',
    },
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.between('md', 'lg')]: {
        fontSize: '1.75rem',
    },
    [theme.breakpoints.between('lg', 'xl')]: {
        fontSize: '2.125rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '2.25rem',
    },
};

theme.typography.h6 = {
    fontSize: '1.25rem',
    fontFamily: fontFamily,
    [theme.breakpoints.up('xs')]: {
        fontSize: '.9rem',
    },
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '1rem',
    },
    [theme.breakpoints.between('md', 'lg')]: {
        fontSize: '1.1rem',
    },
    [theme.breakpoints.between('lg', 'xl')]: {
        fontSize: '1.2rem',
        padding: '.5rem 0',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '1.5rem',
    },
};

theme.typography.body1 = {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontFamily: fontFamily,
    [theme.breakpoints.up('xs')]: {
        fontSize: '.9rem',
    },
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '.9rem',
    },
    [theme.breakpoints.between('md', 'lg')]: {
        fontSize: '1rem',
    },
    [theme.breakpoints.between('lg', 'xl')]: {
        fontSize: '1rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '1.2rem',
    },
};

theme.typography.subtitle1 = {
    fontSize: '1rem',
    fontFamily: fontFamily,
    [theme.breakpoints.up('xs')]: {
        fontSize: '.8rem',
    },
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '.8rem',
    },
    [theme.breakpoints.between('md', 'lg')]: {
        fontSize: '.8rem',
    },
    [theme.breakpoints.between('lg', 'xl')]: {
        fontSize: '.9rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '1rem',
    },
};


export default theme;
