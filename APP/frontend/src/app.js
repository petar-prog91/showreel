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
    Register,
    NotFound,
    NotWatched,
    Explore,
    Show,
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
                <Route
                  path="/"
                  component={() => (
                    store.getState().appState.isLoggedIn ? (<Home />) : (<Login />)
                  )}
                />
                <Route
                  path="/settings"
                  component={() => (
                    store.getState().appState.isLoggedIn ? (<Settings />) : (<Login />)
                  )}
                />
                <Route
                  path="/login"
                  component={() => (
                    store.getState().appState.isLoggedIn ? (<Home />) : (<Login />)
                  )}
                />
                <Route
                  path="/register"
                  component={() => (
                    store.getState().appState.isLoggedIn ? (<Home />) : (<Register />)
                  )}
                />
                <Route
                  path="/not-watched"
                  component={() => (
                    store.getState().appState.isLoggedIn ? (<NotWatched />) : (<Login />)
                  )}
                />
                <Route
                  path="/explore"
                  component={() => (
                    store.getState().appState.isLoggedIn ? (<Explore />) : (<Login />)
                  )}
                />
                <Route
                  path="/show/:id"
                  component={(props) => (
                    store.getState().appState.isLoggedIn ? (<Show {...props} />) : (<Login />)
                  )}
                />
                <Route
                  path="/*"
                  component={() => (
                    store.getState().appState.isLoggedIn ? (<NotFound />) : (<Login />)
                  )}
                />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app'),
);
