import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { authSelectors } from 'redux/auth';
import { paths } from 'routes';

const PrivateRoute = ({ component: Component, isAuthenticated, ...routeProp }) => (
    <Route
        {...routeProp}
        render={props => (isAuthenticated ? <Component {...props} /> : <Redirect to={paths.login} />)}
    />
);

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);
