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

export const App = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <SecurityContextProvider>
            <AuthUIConfiguration>
                <AuthNavigationContainer routeConfig={routes}>
                    <DrawerContext.Provider
                        value={{
                            drawerOpen,
                            setDrawerOpen,
                        }}
                    >
                        <DrawerLayout drawer={<NavigationDrawer />} style={{ height: '100%' }}>
                            <MainRouter />
                        </DrawerLayout>
                    </DrawerContext.Provider>
                </AuthNavigationContainer>
            </AuthUIConfiguration>
        </SecurityContextProvider>
    );
};
