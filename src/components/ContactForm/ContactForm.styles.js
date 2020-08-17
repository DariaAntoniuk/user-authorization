import styled from 'styled-components';

const Form = styled.form`
    padding: 10px 15px 15px;
    border-radius: 5px;
    box-shadow: 1px 2px 7px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
        0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

const Button = styled.button`
    margin-top: 10px;
    font-size: 16px;
    border-radius: 5px;
    padding: 10px 15px;
    outline: none;
    text-shadow: 0 0 1px #000;
    color: cornsilk;
    width: 100%;
    background-color: #4040bf;
    border: none;
    font-family: sans-serif;
    box-shadow: 0 2px 3px #808080;

    &:hover {
        cursor: pointer;
        background-color: #3939ac;
    }
`;

export const Styled = { Form, Button };
