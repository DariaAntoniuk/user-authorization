import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ThemeContext from 'context/ThemeContext';

import Layout from 'components/Layout/Layout';
import HomeView from 'views/HomeView';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';
import ContactsView from 'views/ContactsView';

import { paths } from 'routes';

const App = () => (
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

export default App;
