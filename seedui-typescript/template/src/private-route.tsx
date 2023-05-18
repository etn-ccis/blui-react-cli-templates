import React from 'react';
import { Outlet } from 'react-router-dom';
import { PageLayout } from './component/layout/PageLayout';

export const PrivateRoute = (): any => (
    <PageLayout>
        <Outlet />
    </PageLayout>
)


