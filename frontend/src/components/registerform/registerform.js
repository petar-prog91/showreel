import React from 'react';
import { Control, Form } from 'react-redux-form';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';
import { PropTypes } from 'prop-types';

import { SHOWREEL_API } from '../../constants';
import { registerUser } from '../../actions/register';
import { logInUser, fetchJWTToken, saveJWTToken } from '../../actions/login';
import statusHandle from '../../utils/statusHandle';

const RegisterForm = ({ dispatch }) => {
    const getJWTToken = (data) => {
        dispatch(fetchJWTToken());

        return fetch(`${SHOWREEL_API + 'authenticate/'}`, {
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
        .then(statusHandle)
        .then(response => response.json())
        .then(tokenString => tokenString)
        .catch(error => Promise.reject(error));
    };

    const registerUserFn = (data) => {
        dispatch(registerUser());

        return fetch(`${SHOWREEL_API + 'users/'}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin',
            body: JSON.stringify({
                username: data.username,
                password: data.password,
                email: data.email,
            }),
        })
        .then(statusHandle)
        .then(response => response.json())
        .catch(error => Promise.reject(error));
    };

    const handleSubmit = (val) => {
        registerUserFn(val)
        .then(() => getJWTToken(val))
        .then((token) => {
            dispatch(saveJWTToken(token));
            dispatch(logInUser());
        });
    };

    return (
        <Form model="userRegister" className="form" onSubmit={(val) => handleSubmit(val)}>

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
                <label htmlFor="email">Email</label>
                <Control.input type="email" model=".email" />
                <div className="desc">Please enter your email (required for registration)</div>
            </div>

            <div className="form-item">
                <button type="submit">Submit</button>
            </div>

        </Form>
    );
};

RegisterForm.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default connect()(RegisterForm);
