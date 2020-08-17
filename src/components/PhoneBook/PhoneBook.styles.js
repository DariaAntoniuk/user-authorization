import styled from 'styled-components';

const PhoneBook = styled.div`
    width: 600px;
    margin: 20px auto;
    padding: 0 20px;
    overflow: hidden;

    &.dark {
        background: #333333;
        color: #e6e6e6;
    }
`;

const Title = styled.h1`
    font-family: sans-serif;
    color: #4040bf;
    margin-bottom: 10px;
`;

export const Styled = { PhoneBook, Title };
