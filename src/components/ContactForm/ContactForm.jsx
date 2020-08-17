import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import FormField from 'components/FormField/FormField';
import Alert from 'components/Alert/Alert';

import { Styled } from './ContactForm.styles';

class ContactForm extends Component {
    static propTypes = {
        onAddContact: PropTypes.func.isRequired,
    };

    state = {
        name: '',
        number: '',
        isExist: false,
    };

    handleInputChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        const { name, number } = this.state;
        const { contacts, onAddContact } = this.props;
        const regexp = /^(\d{3,4}[-\s]?(\d{2}[-\s]?){2,3})$/;
        const isNumberValid = regexp.test(number);

        if (!isNumberValid) {
            alert('Please enter a valid number.');
            return;
        }

        const isAlreadyExist = contacts.some(contact => contact.name === name);

        if (isAlreadyExist) {
            this.setState({
                isExist: true,
            });
            setTimeout(() => {
                this.setState({ isExist: false });
            }, 3000);

            return;
        }

        this.setState({
            name: '',
            number: '',
        });

        onAddContact(name, number);
    };

    render() {
        const { name, number, isExist } = this.state;

        return (
            <>
                <CSSTransition in={isExist} timeout={250} classNames="alert-fade" unmountOnExit>
                    <Alert />
                </CSSTransition>

                <Styled.Form onSubmit={this.handleSubmit}>
                    <FormField title="Name" name="name" value={name} onChange={this.handleInputChange} />
                    <FormField title="Number" name="number" value={number} onChange={this.handleInputChange} />
                    <Styled.Button type="submit">Add contact</Styled.Button>
                </Styled.Form>
            </>
        );
    }
}

export default ContactForm;
