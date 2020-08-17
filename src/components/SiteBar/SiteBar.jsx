import React from 'react';

import Navigation from 'components/Navigation/Navigation';
// import AuthNavigation from 'components/AuthNavigation/AuthNavigation';
import UserMenu from 'components/UserMenu/UserMenu';

import { Styled } from './SiteBar.styles';

const SiteBar = ({ isAuthenticated }) => (
    <Styled.Header>
        <Navigation />
        {/*{isAuthenticated ? <UserMenu /> : <AuthNav />}*/}

        <UserMenu />
        {/*<AuthNavigation />*/}
    </Styled.Header>
);

export default SiteBar;
