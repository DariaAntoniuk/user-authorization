import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ContactListItem from '../ContactListItem/ContactListItem';

import { Styled } from './ContactList.styles';

const ContactList = ({ contacts }) => (
    <TransitionGroup component={Styled.List}>
        {contacts.map(contact => (
            <CSSTransition key={contact.id} timeout={250} classNames="contact-list">
                <ContactListItem {...contact} />
            </CSSTransition>
        ))}
    </TransitionGroup>
);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ContactList;
