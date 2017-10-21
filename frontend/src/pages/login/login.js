import React from 'react';
import { connect } from 'react-redux';
import { LoginForm } from '../../components';

const Login = () => (

    <div className="loginPage__base">
        <LoginForm />
    </div>

);

export default connect()(Login);
