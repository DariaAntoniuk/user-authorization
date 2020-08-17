import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import { CSSTransition } from 'react-transition-group';

import ContactForm from 'components/ContactForm/ContactForm';
// import ContactFilter from 'components/ContactFilter/ContactFilter';
// import ContactList from 'components/ContactList/ContactList';
import ThemeButton from 'components/ThemeButton/ThemeButton';
import Notification from 'components/Notification/Notification';

class ContactsView extends Component {
    componentDidMount() {
        // this.props.onFetchContacts();
    }

    render() {
        // const { isContactsLength, isLoadingContacts, isError } = this.props;
        const { isContactsLength, isLoadingContacts, isError } = true;

        return (
            <div>
                <CSSTransition in appear timeout={500} classNames="title-fade" unmountOnExit>
                    <h1 className="header">Phonebook</h1>
                </CSSTransition>

                <ContactForm />
                {/*{isContactsLength > 1 && <ContactFilter />}*/}

                {isLoadingContacts && <Loader type="ThreeDots" color="#E600AC" height={100} width={100} />}
                {isError && <Notification message={isError} />}

                {/*{!!isContactsLength && !isError && <ContactList />}*/}

                <ThemeButton />
            </div>
        );
    }
}

export default ContactsView;
