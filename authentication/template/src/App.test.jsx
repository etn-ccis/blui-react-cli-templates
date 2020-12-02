import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import * as PXBThemes from '@pxblue/react-themes';
import { HomePage } from './pages/home';
import { DrawerContext } from './contexts/drawerContextProvider';

jest.mock('@pxblue/react-auth-shared', () => ({
    useSecurityActions: () => ({
        onUserNotAuthenticated: jest.fn(),
        showChangePassword: jest.fn(),
    }),
}));

test('renders welcome text', () => {
    render(
        <ThemeProvider theme={createMuiTheme(PXBThemes.blue)}>
            <DrawerContext.Provider
                value={{
                    drawerOpen: true,
                    setDrawerOpen: jest.fn(),
                }}
            >
                <HomePage />
            </DrawerContext.Provider>
        </ThemeProvider>
    );
    const pxbText = screen.getByText(/Welcome to PX/i);
    expect(pxbText).toBeInTheDocument();
});
