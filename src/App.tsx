import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import routes from './routes';

import './App.css';

const App = () => {
    const Routes = routes.map((route) => (
        <Route key={route.path} path={route.path} component={route.component} {...route} />
    ));

    return (
        <>
            <Navigation />
            <Switch>{Routes}</Switch>
        </>
    );
};

export default App;
