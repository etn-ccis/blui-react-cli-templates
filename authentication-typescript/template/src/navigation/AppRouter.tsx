import React, { useState } from 'react';
import {
    AuthContextProvider,
    ContactSupportScreen,
    ReactRouterAuthGuard,
    ReactRouterGuestGuard,
    ForgotPasswordScreen,
    RegistrationContextProvider,
    ResetPasswordScreen,
    RegistrationWorkflow,
    LoginScreen,
} from '@brightlayer-ui/react-auth-workflow';
import { DrawerLayout } from '@brightlayer-ui/react-components';
import { useApp } from '../contexts/AppContextProvider';
import { useNavigate } from 'react-router';
import { ProjectAuthUIActions } from '../actions/AuthUIActions';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { ProjectRegistrationUIActions } from '../actions/RegistrationUIActions';
import { routes } from './Routing';
import i18nAppInstance from '../translations/i18n';
import { ChangePassword } from '../components/ChangePassword';
import { DebugComponent } from '../components';
import EatonLogo from '../assets/images/eaton_stacked_logo.png';
import { PAGES } from '../router/routes';
import { DrawerContext } from '../contexts/drawerContextProvider';
import { NavigationDrawer } from '../router/drawer';

export const AppRouter: React.FC = () => {
    const navigate = useNavigate();
    const app = useApp();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const { email, rememberMe } = app.loginData;

    return (
        <Routes>
            {/* AUTH ROUTES */}
            <Route
                element={
                    <AuthContextProvider
                        actions={ProjectAuthUIActions(app)}
                        language={app.language}
                        navigate={navigate}
                        routeConfig={routes}
                        i18n={i18nAppInstance}
                        rememberMeDetails={{ email: rememberMe ? email : '', rememberMe: rememberMe }}
                    >
                        <Outlet />
                    </AuthContextProvider>
                }
            >
                <Route
                    path={'/login'}
                    element={
                        <ReactRouterGuestGuard isAuthenticated={app.isAuthenticated} fallBackUrl={'/'}>
                            <LoginScreen
                                projectImage={<img src={EatonLogo} alt="logo" style={{ maxHeight: 80 }} />}
                                header={<DebugComponent />}
                                errorDisplayConfig={{
                                    mode: 'message-box',
                                    messageBoxConfig: {
                                        dismissible: true,
                                        position: 'top',
                                    },
                                }}
                            />
                        </ReactRouterGuestGuard>
                    }
                />
                <Route
                    path={'/forgot-password'}
                    element={
                        <ReactRouterGuestGuard isAuthenticated={app.isAuthenticated} fallBackUrl={'/'}>
                            <ForgotPasswordScreen />
                        </ReactRouterGuestGuard>
                    }
                />
                <Route
                    path={'/contact-support'}
                    element={
                        <ReactRouterGuestGuard isAuthenticated={app.isAuthenticated} fallBackUrl={'/'}>
                            <ContactSupportScreen />
                        </ReactRouterGuestGuard>
                    }
                />
                <Route
                    path={'/reset-password'}
                    element={
                        <ReactRouterGuestGuard isAuthenticated={app.isAuthenticated} fallBackUrl={'/'}>
                            <ResetPasswordScreen />
                        </ReactRouterGuestGuard>
                    }
                />
                {/* USER APPLICATION ROUTES */}
                <Route
                    element={
                        <DrawerContext.Provider
                            value={{
                                drawerOpen,
                                setDrawerOpen,
                            }}
                        >
                            <DrawerLayout drawer={<NavigationDrawer />} sx={{ height: '100%' }}>
                                <Outlet />
                                {app.showChangePasswordDialog && <ChangePassword />}
                            </DrawerLayout>
                        </DrawerContext.Provider>
                    }
                >
                    {PAGES.map((page) => {
                        const RouteElement = page.component;
                        return (
                            <Route
                                key={`route_${page.route}`}
                                path={`${page.route}`}
                                element={
                                    <ReactRouterAuthGuard isAuthenticated={app.isAuthenticated} fallBackUrl={'/login'}>
                                        <RouteElement />
                                    </ReactRouterAuthGuard>
                                }
                            />
                        );
                    })}
                    <Route path={'/'} element={<Navigate to={'/homepage'} replace />} />
                </Route>
                <Route
                    path={'*'}
                    element={
                        <ReactRouterAuthGuard isAuthenticated={app.isAuthenticated} fallBackUrl={'/login'}>
                            <Navigate to={'/login'} />
                        </ReactRouterAuthGuard>
                    }
                />
            </Route>
            {/* REGISTRATION ROUTES */}
            <Route
                element={
                    <RegistrationContextProvider
                        language={app.language}
                        routeConfig={routes}
                        navigate={navigate}
                        actions={ProjectRegistrationUIActions()}
                        i18n={i18nAppInstance}
                    >
                        <Outlet />
                    </RegistrationContextProvider>
                }
            >
                <Route path={'/self-registration'} element={<RegistrationWorkflow />} />
                <Route path={'/register-by-invite'} element={<RegistrationWorkflow isInviteRegistration />} />
            </Route>
        </Routes>
    );
};
