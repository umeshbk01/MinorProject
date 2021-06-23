import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { SnackbarProvider } from 'notistack';

import history from './Utils/history';
import PrivateRoute from './Utils/PrivateRoute';
import Home from './Main/Home';
import Chat from './Chat/Chat';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#8a2be2',
            main: '#8a2be2',
            dark: '#702963',
        },
        secondary: {
            light: '#ffd95a',
            main: '#f9a825',
            dark: '#c17900',
            contrastText: '#212121',
        },
        background: {
            default: '#e6fafa',
        },
    },
    typography: {
        useNextVariants: true,
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
                <Router history={history}>
                    <Route path="/" exact component={Home} />
                    <PrivateRoute path="/" component={Chat} /> 
                </Router>
            </SnackbarProvider>
        </ThemeProvider>
    );
}

export default App;
