import React from 'react';

import ThemeContext from 'context/ThemeContext';

import PhoneBook from 'components/PhoneBook/PhoneBook';

const App = () => (
    <ThemeContext>
        <PhoneBook />
    </ThemeContext>
);

export default App;
