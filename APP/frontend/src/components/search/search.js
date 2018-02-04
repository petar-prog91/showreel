import React from 'react';
import fetch from 'isomorphic-fetch';
import { PropTypes } from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { TV_MAZE_API } from '../../constants';
import { loadShows } from '../../actions/shows';
import statusHandle from '../../utils/statusHandle';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <label htmlFor={input.id}>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
);

const getShowsByString = (searchVal) => fetch(`${TV_MAZE_API + '/search/shows?q=' + searchVal}`)
        .then(statusHandle)
        .then(response => response.json())
        .catch(error => Promise.reject(error));

const submit = (formVal) => {
    getShowsByString(formVal.search).then((searchResults) => dispatch(loadShows(searchResults)));
};

const Search = (props) => {
    const { handleSubmit } = props;

    return (
        <form className="form" onSubmit={handleSubmit(submit)}>

            <div className="form-item">
                <Field name="search" type="text" component={renderField} label="Search Field" />
                <div className="desc">Search for shows</div>
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

Search.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
    form: 'searchForm',
})(Search);
