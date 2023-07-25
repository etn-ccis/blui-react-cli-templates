import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthUIContextProvider, AuthNavigationContainer } from '@etn-electrical/derms-blcloud-react-seedui';

import { DrawerContext } from './contexts/drawerContextProvider';
import { UserInvite } from './component/pages/userinvite/UserInvite';
import { Dashboard } from './component/pages/dashboard/Dashboard';
import { PageNotFound } from './component/pages/pagenotfound/PageNotFound';
import { PrivateRoute } from './private-route';
import { authConfig } from './config';
import { ProjectAuthUIActions } from './actions/AuthUIActions';


export const AuthUIConfiguration: React.FC<React.PropsWithChildren> = (props) => (
  <AuthUIContextProvider
    authUIConfig={authConfig}
    authActions={ProjectAuthUIActions()}
    showSelfRegistration={true}
    showInviteRegistration={true}
  >
    {props.children}
  </AuthUIContextProvider>
);


const App: React.FC<React.PropsWithChildren> = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const MyAppRoutes = (
    <DrawerContext.Provider value={{ drawerOpen, setDrawerOpen }} >
      <Routes>
        <Route path='*' element={<PageNotFound />} />
        <Route path='/' element={<PrivateRoute />} >
          <Route path='invite' element={<UserInvite />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='/' element={<Navigate replace to="login" />} />
        </Route>
      </Routes>
    </DrawerContext.Provider>
  )

  return (
    <AuthUIConfiguration>
      <AuthNavigationContainer>
        {MyAppRoutes}
      </AuthNavigationContainer>
    </AuthUIConfiguration>
  );
}

export default App;