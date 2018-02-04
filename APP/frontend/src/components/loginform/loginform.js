import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { PropTypes } from 'prop-types';
import fetch from 'isomorphic-fetch';

import { SHOWREEL_API } from '../../constants';
import { logInUser, fetchJWTToken, saveJWTToken } from '../../actions/login';
import statusHandle from '../../utils/statusHandle';

const getJWTToken = (data, dispatch) => {
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

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <label htmlFor={input.id}>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
);

const submit = (val, dispatch) => {
    getJWTToken(val, dispatch).then((token) => {
        dispatch(saveJWTToken(token));
        dispatch(logInUser());
    });
};

const LoginForm = (props) => {
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

LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
    form: 'loginForm',
})(LoginForm);
