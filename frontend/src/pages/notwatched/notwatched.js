import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { TV_MAZE_API } from '../../constants';
import statusHandle from '../../utils/statusHandle';

import ShowList from '../../components/showlist/showlist';
import loadShows from '../../actions/shows';

const NotWatched = ({ showsList, loadShows }) => {
    fetch(`${TV_MAZE_API + '/search/shows?q=rebels'}`)
    .then(statusHandle)
    .then(response => response.json())
    .then(response => loadShows(response))
    .catch(error => Promise.reject(error));

    return (
        <div>
            <h1>Not Watched page</h1>
            <p>Work in progress</p>

            <ShowList listOfShows={showsList} />
        </div>
    );
};

NotWatched.propTypes = {
    showsList: PropTypes.array.isRequired,
    loadShows: PropTypes.func.isRequired,
};

export default connect(
    state => ({ showsList: state.showsState.showsList }),
    { loadShows },
)(NotWatched);
