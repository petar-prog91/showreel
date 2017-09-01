import React from 'react';
import { connect } from 'react-redux';
import { LoginForm } from '../../components';

const Register = () => (

    <div className="registerPage__base">
        <LoginForm />
    </div>

);

export default connect()(Register);
