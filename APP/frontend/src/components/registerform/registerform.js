import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { PropTypes } from 'prop-types';
import fetch from 'isomorphic-fetch';

import { SHOWREEL_API } from '../../constants';
import { registerUser } from '../../actions/register';
import { logInUser, fetchJWTToken, saveJWTToken } from '../../actions/login';
import statusHandle from '../../utils/statusHandle';
import getJWTToken from '../../services/jwtToken';

const registerUserFn = (data, dispatch) => {
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

const submit = (val, dispatch) => {
    registerUserFn(val, dispatch)
    .then(() => {
        dispatch(fetchJWTToken());
        getJWTToken(SHOWREEL_API, val);
    })
    .then((token) => {
        dispatch(saveJWTToken(token));
        dispatch(logInUser());
    });
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <label htmlFor={input.id}>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
);

const RegisterForm = (props) => {
    const { handleSubmit } = props;

    return (
        <form className="form" onSubmit={handleSubmit(submit)}>

            <div className="form-item">
                <Field name="username" type="text" component={renderField} label="Username" />
                <div className="desc">Please enter your username</div>
            </div>

            <div className="form-item">
            <Field name="password" type="password" component={renderField} label="Password" />
                <div className="desc">Please enter your password</div>
            </div>

            <div className="form-item">
            <Field name="email" type="email" component={renderField} label="Email" />
                <div className="desc">Please enter your email (required for registration)</div>
            </div>

            <div className="form-item">
                <button type="submit">Submit</button>
            </div>

        </form>
    );
};

renderField.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    meta: PropTypes.object.isRequired,
};

RegisterForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
    form: 'registerForm',
})(RegisterForm);

