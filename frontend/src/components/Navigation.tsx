import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navigation = () => (
    <NavBar>
        <RootLink to='/'>Direwolves & Dragons</RootLink>
    </NavBar>
);

const NavBar = styled.nav`
    height: 4em;
    margin: 0 4em;
    margin-bottom: 4rem;

    display: flex;
    align-items: center;
`;

const RootLink = styled(Link)`
    font-weight: 700;
`;

export default Navigation;
