import React, { Component } from 'react';

import Form from 'components/Form/Form';
import FormField from 'components/FormField/FormField';
import Button from 'components/Button/Button';

class LoginView extends Component {
    state = {
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

        this.props.onLogin({ ...this.state });
    };

    render() {
        const { email, password } = this.state;

        return (
            <div>
                <h1 className="header">Login Page</h1>

                <Form onSubmit={this.handleSubmit}>
                    <FormField title="Email" name="email" value={email} onChange={this.handleChange} />
                    <FormField title="Password" name="password" value={password} onChange={this.handleChange} />

                    <Button title="Login" />
                </Form>
            </div>
        );
    }
}

export default LoginView;
