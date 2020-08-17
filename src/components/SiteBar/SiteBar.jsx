import React from 'react';

import Navigation from 'components/Navigation/Navigation';
// import AuthNav from 'components/AuthNav/AuthNav';
// import UserMenu from 'components/UserMenu/UserMenu';

import { Styled } from './SiteBar.styles';

const SiteBar = ({ isAuthenticated }) => (
    <Styled.Header>
        <Navigation />
        {/*{isAuthenticated ? <UserMenu /> : <AuthNav />}*/}
    </Styled.Header>
);

export default SiteBar;
