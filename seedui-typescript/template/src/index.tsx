import React from 'react';
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import * as BLUIThemes from '@brightlayer-ui/react-themes';
import '@brightlayer-ui/react-themes/open-sans';
import App  from './App';
import './index.css';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container || document.createDocumentFragment());

root.render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={createTheme(BLUIThemes.blue)}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </StyledEngineProvider>
    </React.StrictMode>
);


