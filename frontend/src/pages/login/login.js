import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { LoginForm } from '../../components';

const Login = () => (

    <div className="loginPage__base">
        <LoginForm />
        <p>Don't have an account? <Link to="/register">Click here</Link> to register</p>
    </div>

);

export default connect()(Login);
