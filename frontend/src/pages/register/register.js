import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { RegisterForm } from '../../components';

const Register = () => (

    <div className="registerPage__base">
        <RegisterForm />
        <p>{'Already have account? '} <Link to="/login">Click here</Link> {'to login'}</p>
    </div>

);

export default connect()(Register);
