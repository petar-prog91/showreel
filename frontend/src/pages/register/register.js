import React from 'react';
import { connect } from 'react-redux';
import { RegisterForm } from '../../components';

const Register = () => (

    <div className="registerPage__base">
        <RegisterForm />
    </div>

);

export default connect()(Register);
