import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { combineForms } from 'react-redux-form';

import * as reducers from './reducers';
import {
    App,
    Home,
    Settings,
    Login,
    NotFound,
} from './pages';

const reducer = combineForms({
    ...reducers,
});

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

/* eslint no-undef: 0 */
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/app" component={App}>
                <IndexRoute component={Home} />
                <Route path="/" component={Home} />
                <Route path="/settings" component={Settings} />
                <Route path="/login" component={Login} />
                <Route path="/*" component={NotFound} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app'),
);
