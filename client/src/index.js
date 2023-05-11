import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import theme from './utils/mui_theme';


const root = createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>
)