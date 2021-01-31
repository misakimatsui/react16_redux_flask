import React from 'react';
import { Route } from 'react-router-v3';

/* containers */
import { App } from './containers/App';
import { HomeContainer } from './containers/HomeContainer';

export default (
    <Route path="/" component={App}>
        <Route path="main" component={(HomeContainer)} />
    </Route>
);
