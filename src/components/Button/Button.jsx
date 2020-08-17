import React from 'react';

import withTheme from 'hoc/withTheme';

import { Styled } from './Button.styles';

const Button = ({ theme }) => (
    <Styled.Button onClick={theme.toggleTheme} className={theme.isDark ? 'btn-dark' : ''}>
        Switch to {theme.isDark ? 'light' : 'dark'} theme
    </Styled.Button>
);

export default withTheme(Button);
