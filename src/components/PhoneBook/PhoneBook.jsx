import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import { CSSTransition } from 'react-transition-group';

// import ContactForm from 'components/ContactForm/ContactForm';
// import ContactFilter from 'components/ContactFilter/ContactFilter';
// import ContactList from 'components/ContactList/ContactList';
import Button from 'components/Button/Button';
import Notification from 'components/Notification/Notification';

import withTheme from 'hoc/withTheme';

import { Styled } from './PhoneBook.styles';

class PhoneBook extends Component {
    componentDidMount() {
        // this.props.onFetchContacts();
    }

    render() {
        const { isDark } = this.props.theme;
        // const { isContactsLength, isLoadingContacts, isError } = this.props;
        const { isContactsLength, isLoadingContacts, isError } = true;

        return (
            <Styled.PhoneBook className={isDark ? 'dark' : ''}>
                <CSSTransition in appear timeout={500} classNames="title-fade" unmountOnExit>
                    <Styled.Title>Phonebook</Styled.Title>
                </CSSTransition>

                {/*<ContactForm />*/}
                {/*{isContactsLength > 1 && <ContactFilter />}*/}

                {isLoadingContacts && <Loader type="ThreeDots" color="#E600AC" height={100} width={100} />}
                {isError && <Notification message={isError} />}

                {/*{!!isContactsLength && !isError && <ContactList />}*/}

                <Button />
            </Styled.PhoneBook>
        );
    }
}

export default withTheme(PhoneBook);
