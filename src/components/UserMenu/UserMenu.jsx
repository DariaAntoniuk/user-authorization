import React from 'react';
import { connect } from 'react-redux';

import Loader from 'components/Loader/Loader';
import { authSelectors, authOperation } from 'redux/auth';

import { Styled } from './UserMenu.style';

const UserMenu = ({
    avatar = 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
    isLoading,
    name,
    onLogout,
}) => (
    <>
        {isLoading && <Loader style={{ textAlign: 'right' }} />}
        <Styled.Nav>
            <Styled.Image src={avatar} alt="user image" />
            <span>Welcome, {name}</span>
            <button onClick={onLogout}>Logout</button>
        </Styled.Nav>
    </>
);

const mapStateToProps = state => ({
    isLoading: authSelectors.isLoading(state),
    name: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
    onLogout: authOperation.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
