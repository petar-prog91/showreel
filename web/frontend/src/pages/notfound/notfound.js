import React from 'react';
import { connect } from 'react-redux';

const NotFound = () => (
    <div>
        <h1>Not Found page</h1>
        <p>Work in progress</p>
    </div>
);

export default connect()(NotFound);
