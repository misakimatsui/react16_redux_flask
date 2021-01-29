import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Redirect, browserHistory } from 'react-router-v3';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configureStore';
import routes from './routes';
import './style.scss';

require('expose?$!expose?jQuery!jquery');
require('bootstrap-webpack');

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Redirect from="/" to="main" />
            {routes}
        </Router>
    </Provider>,
    document.getElementById('root')
);
