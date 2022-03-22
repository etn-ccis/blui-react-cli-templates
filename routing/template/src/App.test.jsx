import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
import * as BLUIThemes from '@brightlayer-ui/react-themes';
import { HomePage } from './pages/home';
import { DrawerContext } from './contexts/drawerContextProvider';

test('renders welcome text', () => {
    render(
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={createTheme(BLUIThemes.blue)}>
                <DrawerContext.Provider
                    value={{
                        drawerOpen: true,
                        setDrawerOpen: jest.fn(),
                    }}
                >
                    <HomePage />
                </DrawerContext.Provider>
            </ThemeProvider>
        </StyledEngineProvider>
    );
    const bluiText = screen.getByText(/Welcome to Brightlayer/i);
    expect(bluiText).toBeInTheDocument();
});
