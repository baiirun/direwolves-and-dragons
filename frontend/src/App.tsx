import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Navigation from './components/Navigation';
import routes from './routes';

const App = () => {
    const Routes = routes.map((route) => <Route path={route.path} component={route.component} {...route} />);

    return (
        <Router>
            <GlobalStyles />
            <Navigation />
            <Switch>{Routes}</Switch>
        </Router>
    );
};

const GlobalStyles = createGlobalStyle`
    @import url('https://rsms.me/inter/inter.css');

    body {
        background-color: #fafafa;
    }

    html {
        font-size: 1.125;
        font-family: 'Inter', sans-serif;
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
