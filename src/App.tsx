import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import Navigation from './components/Navigation';
import routes from './routes';

const App = () => {
    const Routes = routes.map((route) => (
        <Route key={route.path} path={route.path} component={route.component} {...route} />
    ));

    return (
        <>
            {/* Not sure why there's a typescript error here... */}
            <GlobalStyles />
            <Navigation />
            <Switch>{Routes}</Switch>
        </>
    );
};

// Create some simple baseline styles
const GlobalStyles = createGlobalStyle`
    @import url('https://rsms.me/inter/inter.css');

    body {
        background-color: hsla(0, 0%, 98%, 1);
        font-variant-numeric: tabular-nums;

    }

    html {
        font-size: 1.125;
        line-height: 1.5;
        font-family: 'Inter', sans-serif;
        font-variant-numeric: tabular-nums;
        font-feature-settings: 'zero' 1;
        color: hsla(0, 0%, 21%, 1);
    }

    @supports (font-variation-settings: normal) {
        html { font-family: 'Inter var', sans-serif; }
    }

    a {
        text-decoration: none;
        font-size: 1.6rem;
        color: hsla(0, 0%, 21%, 1);
    }
`;

export default App;
