import React, { useState, useEffect } from 'react';
import { AppContext, AppContextType } from './contexts/AppContextProvider';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './navigation/AppRouter';
import { I18nextProvider } from 'react-i18next';
import i18nAppInstance from './translations/i18n';
import { LocalStorage } from './store/local-storage';
import { Stack, CircularProgress } from '@mui/material';

export const App = (): JSX.Element => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [language, setLanguage] = useState(window.localStorage.getItem('app-i18nextLng')?.toString() ?? 'en');
    const [loginData, setLoginData] = useState<AppContextType['loginData']>({
        email: '',
        rememberMe: false,
    });
    const [showChangePasswordDialog, setShowChangePasswordDialog] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    // handle initialization of auth data on first load
    useEffect(() => {
        const initialize = async (): Promise<void> => {
            try {
                const userData = await LocalStorage.readAuthData();
                setLoginData({ email: userData.rememberMeData.user, rememberMe: userData.rememberMeData.rememberMe });
                setIsAuthenticated(Boolean(userData.userId));
            } catch (e) {
                // handle any error state, rejected promises, etc..
            } finally {
                setIsLoading(false);
            }
        };
        void initialize();
    }, []);

    return isLoading ? (
        <Stack
            alignItems={'center'}
            justifyContent={'center'}
            sx={{
                width: '100%',
                height: (t) => ({ xs: `calc(100vh - ${t.spacing(7)})`, md: `calc(100vh - ${t.spacing(8)})` }),
                padding: 0,
                overflow: 'auto',
                position: 'relative',
            }}
        >
            <CircularProgress
                sx={{
                    margin: 'auto',
                    display: 'flex',
                    zIndex: 4,
                    position: 'absolute',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                size={70}
                variant={'indeterminate'}
            />
        </Stack>
    ) : (
        <I18nextProvider i18n={i18nAppInstance} defaultNS={'app'}>
            <AppContext.Provider
                value={{
                    isAuthenticated,
                    onUserAuthenticated: (userData): void => {
                        setIsAuthenticated(true);
                        setLoginData(userData);
                    },
                    // eslint-disable-next-line
                    onUserNotAuthenticated: (userData): void => {
                        setIsAuthenticated(false);
                    },
                    loginData,
                    setLoginData,
                    language,
                    setLanguage,
                    showChangePasswordDialog,
                    setShowChangePasswordDialog,
                }}
            >
                <BrowserRouter>
                    <AppRouter />
                </BrowserRouter>
            </AppContext.Provider>
        </I18nextProvider>
    );
};
