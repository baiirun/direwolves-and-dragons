import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Navigation from './components/Navigation';
import routes from './routes';

const App = () => {
    const routesToRender = routes.map((route) => <Route to={route.path} component={route.component} />);

    return (
        <Router>
            <GlobalStyles />
            <Navigation />
            <Switch>{routesToRender}</Switch>
        </Router>
    );
};

const GlobalStyles = createGlobalStyle`
    @import url('https://rsms.me/inter/inter.css');

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
