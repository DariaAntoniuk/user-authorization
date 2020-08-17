import React, { Component } from 'react';

import Form from 'components/Form/Form';
import FormField from 'components/FormField/FormField';
import Button from 'components/Button/Button';

class RegisterView extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onRegister({ ...this.state });
        this.setState({ name: '', email: '', password: '' });
    };

    render() {
        const { name, email, password } = this.state;

        return (
            <div>
                <h1 className="header">Register Page</h1>

                <Form onSubmit={this.handleSubmit}>
                    <FormField title="Name" name="name" value={name} onChange={this.handleChange} />
                    <FormField title="Email" name="email" value={email} onChange={this.handleChange} />
                    <FormField title="Password" name="password" value={password} onChange={this.handleChange} />

                    <Button title="Register" />
                </Form>
            </div>
        );
    }
}

export default RegisterView;
