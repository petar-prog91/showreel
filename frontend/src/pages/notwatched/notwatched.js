import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { TV_MAZE_API } from '../../constants';
import statusHandle from '../../utils/statusHandle';

import ShowList from '../../components/showlist/showlist';
import { loadShows } from '../../actions/shows';

class NotWatched extends React.Component {
    componentDidMount() {
        fetch(`${TV_MAZE_API + '/search/shows?q=rebels'}`)
        .then(statusHandle)
        .then(response => response.json())
        .then(response => this.props.loadShows(response))
        .catch(error => Promise.reject(error));
    }

    render() {
        return (
            <div>
                <h1>Not Watched page</h1>
                <p>Work in progress</p>

                <ShowList listOfShows={this.props.showsList} />
            </div>
        );
    }
}

NotWatched.propTypes = {
    showsList: PropTypes.array.isRequired,
    loadShows: PropTypes.func.isRequired,
};

export default connect(
    state => ({ showsList: state.showsState.showsList }),
    { loadShows },
)(NotWatched);
