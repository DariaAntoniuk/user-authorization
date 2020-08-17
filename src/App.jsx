import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import ThemeContext from 'context/ThemeContext';

import Layout from 'components/Layout/Layout';
import HomeView from 'views/HomeView';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';
import ContactsView from 'views/ContactsView';

import { authOperation } from 'redux/auth';

import { paths } from 'routes';

class App extends Component {
    componentDidMount() {
        this.props.onGetCurrentUser();
    }

    render() {
        return (
            <ThemeContext>
                <Layout>
                    <Switch>
                        <Route path={paths.home} exact component={HomeView} />
                        <Route path={paths.register} exact component={RegisterView} />
                        <Route path={paths.login} exact component={LoginView} />
                        <Route path={paths.contacts} exact component={ContactsView} />

                        <Redirect to={paths.home} />
                    </Switch>
                </Layout>
            </ThemeContext>
        );
    }
}

const mapDispatchToProps = {
    onGetCurrentUser: authOperation.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
