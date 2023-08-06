import React, { useState, lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthUIContextProvider, AuthNavigationContainer } from '@etn-electrical/derms-blcloud-react-seedui';

import { DrawerContext } from './contexts/drawerContextProvider';
import { PageNotFound } from './component/pages/pagenotfound/PageNotFound';
import { PrivateRoute } from './private-route';
import { authConfig } from './config';
import { ProjectAuthUIActions } from './actions/AuthUIActions';

const UserInvite = lazy(() => import("./component/pages/userinvite/UserInvite"));
const Dashboard = lazy(() => import("./component/pages/dashboard/Dashboard"));


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
  const [drawerOpen, setDrawerOpen] = useState(false);

  const MyAppRoutes = (
    <DrawerContext.Provider value={{ drawerOpen, setDrawerOpen }} >
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='*' element={<PageNotFound />} />
          <Route path='/' element={<PrivateRoute />} >
            <Route path='invite' element={<UserInvite />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='/' element={<Navigate replace to="login" />} />
          </Route>
        </Routes>
      </Suspense>
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