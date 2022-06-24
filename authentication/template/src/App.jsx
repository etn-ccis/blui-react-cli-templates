import React, { useState } from 'react';
import { DrawerContext } from './contexts/drawerContextProvider';
import { NavigationDrawer } from './router/drawer';
import { MainRouter } from './router/main';
import { DrawerLayout } from '@brightlayer-ui/react-components';
import {
    SecurityContextProvider,
    AuthNavigationContainer,
    AuthUIContextProvider,
    useSecurityActions,
} from '@brightlayer-ui/react-auth-workflow';
import { ProjectAuthUIActions } from './actions/AuthUIActions';
import { ProjectRegistrationUIActions } from './actions/RegistrationUIActions';
import { routes } from './constants/routing';
import productLogo from './assets/images/eaton_stacked_logo.png';
import { Route, Outlet } from 'react-router-dom';

export const AuthUIConfiguration = (props) => {
    const securityContextActions = useSecurityActions();

    return (
        <AuthUIContextProvider
            authActions={ProjectAuthUIActions(securityContextActions)}
            registrationActions={ProjectRegistrationUIActions}
            showSelfRegistration={false}
            allowDebugMode={true}
            htmlEula={false}
            contactEmail={'something@email.com'}
            contactPhone={'1-800-123-4567'}
            projectImage={productLogo}
        >
            {props.children}
        </AuthUIContextProvider>
    );
};

const SharedLayoutWrapper = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    return (
        <DrawerContext.Provider
            value={{
                drawerOpen,
                setDrawerOpen,
            }}
        >
            <DrawerLayout drawer={<NavigationDrawer />} sx={{ height: '100%' }}>
                <Outlet />
            </DrawerLayout>
        </DrawerContext.Provider>
    );
};

export const App = () => (
    <SecurityContextProvider>
        <AuthUIConfiguration>
            <AuthNavigationContainer routeConfig={routes}>
                <Route path={''} element={<SharedLayoutWrapper />}>
                    {MainRouter}
                </Route>
            </AuthNavigationContainer>
        </AuthUIConfiguration>
    </SecurityContextProvider>
);
