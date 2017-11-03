import React from 'react';
import { Control, Form } from 'react-redux-form';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';
import { PropTypes } from 'prop-types';

import { TV_MAZE_API } from '../../constants';
import { loadShows } from '../../actions/shows';
import statusHandle from '../../utils/statusHandle';

const Search = ({ dispatch }) => {
    const getShowsByString = (searchVal) => {
        return fetch(`${TV_MAZE_API + '/search/shows?q=' + searchVal}`)
        .then(statusHandle)
        .then(response => response.json())
        .catch(error => Promise.reject(error));
    };

    const handleSubmit = (formVal) => {
        getShowsByString(formVal.search).then((searchResults) => dispatch(loadShows(searchResults)));
    };

    return (
        <Form model="search" className="form" onSubmit={(val) => handleSubmit(val)}>

            <div className="form-item">
                <label htmlFor="username">Search Field</label>
                <Control.input model=".search" />
                <div className="desc">Search for shows</div>
            </div>

            <div className="form-item">
                <button type="submit">Submit</button>
            </div>

        </Form>
    );
};

Search.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default connect()(Search);
