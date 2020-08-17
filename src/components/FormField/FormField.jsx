import React from 'react';

import { Styled } from './FormField.styles';

const FormField = ({ title, name, value, onChange }) => (
    <Styled.Label>
        {title}
        <Styled.Input type="text" name={name} value={value} onChange={onChange} />
    </Styled.Label>
);

export default FormField;
