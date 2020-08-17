import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { authSelectors } from 'redux/auth';

import { paths } from 'routes';

const PublicRoute = ({ component: Component, isAuthenticated, ...routeProp }) => (
    <Route
        {...routeProp}
        render={props =>
            isAuthenticated && routeProp.restricted ? <Redirect to={paths.contacts} /> : <Component {...props} />
        }
    />
);

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);
