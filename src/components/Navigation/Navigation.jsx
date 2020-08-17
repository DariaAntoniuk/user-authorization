import React from 'react';

import { paths } from 'routes';

import { Styled } from './Navigation.styled';

const Navigation = () => {
    const links = [
        { url: paths.home, exact: true, label: 'Home' },
        { url: paths.register, exact: true, label: 'Register' },
        { url: paths.login, exact: true, label: 'Login' },
        { url: paths.contacts, exact: true, label: 'Contacts' },
    ].map(route => (
        <Styled.NavLink key={route.url} to={route.url} exact={route.exact} activeClassName="active">
            {route.label}
        </Styled.NavLink>
    ));

    return <nav>{links}</nav>;
};

export default Navigation;
