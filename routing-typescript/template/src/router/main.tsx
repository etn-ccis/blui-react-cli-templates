import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PAGES } from './routes';

export const MainRouter = (): JSX.Element => (
    <Switch>
        {PAGES.map((page) => (
            <Route key={`route_${page.route}`} exact path={`${page.route}`} component={page.component} />
        ))}
        <Route path={'*'}>
            <Redirect to={'/'} />
        </Route>
    </Switch>
);
