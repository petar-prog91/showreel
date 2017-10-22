import React from 'react';
import { Control, Form } from 'react-redux-form';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';
import { PropTypes } from 'prop-types';

import { SKOLAR_API } from '../../constants';
import { logInUser, fetchJWTToken, saveJWTToken } from '../../actions/login';

class LoginForm extends React.Component {
    static statusHandle(res) {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res;
    }

    getJWTToken(data) {
        this.props.dispatch(fetchJWTToken());

        return fetch(`${SKOLAR_API + 'authenticate/'}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin',
            body: JSON.stringify({
                username: data.username,
                password: data.password,
            }),
        })
        .then(this.statusHandle)
        .then(response => response.json())
        .then(tokenString => tokenString)
        .catch(error => Promise.reject(error));
    }

    handleSubmit(val) {
        this.getJWTToken(val).then((token) => {
            this.props.dispatch(saveJWTToken(token));
            this.props.dispatch(logInUser());
        });
    }

    render() {
        return (
            <Form model="userLogin" className="form" onSubmit={(val) => this.handleSubmit(val)}>

                <div className="form-item">
                    <label htmlFor="username">Username</label>
                    <Control.input model=".username" />
                    <div className="desc">Please enter your username</div>
                </div>

                <div className="form-item">
                    <label htmlFor="password">Password</label>
                    <Control.input type="password" model=".password" />
                    <div className="desc">Please enter your password</div>
                </div>

                <div className="form-item">
                    <button type="submit">Submit</button>
                </div>

            </Form>
        );
    }
}

LoginForm.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default connect()(LoginForm);
