import React from 'react';
import { connect } from 'react-redux';

import { authSelectors } from 'redux/auth';

import { paths } from 'routes';

import { Styled } from './Navigation.styled';

const Navigation = ({ isAuthenticated }) => (
    <nav>
        <Styled.NavLink to={paths.home} exact activeClassName="active">
            Home
        </Styled.NavLink>
        {isAuthenticated && (
            <Styled.NavLink to={paths.contacts} exact activeClassName="active">
                Contacts
            </Styled.NavLink>
        )}
    </nav>
);

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
