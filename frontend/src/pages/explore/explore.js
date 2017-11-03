
import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { TV_MAZE_API } from '../../constants';
import statusHandle from '../../utils/statusHandle';

import ShowList from '../../components/showlist/showlist';
import Search from '../../components/search/search';

import { loadShows } from '../../actions/shows';

class Explore extends React.Component {
    componentDidMount() {
        fetch(`${TV_MAZE_API + '/schedule?country=US&date=2014-12-01'}`)
        .then(statusHandle)
        .then(response => response.json())
        .then(response => this.props.loadShows(response))
        .catch(error => Promise.reject(error));
    }

    render() {
        return (
            <div>
                <h1>Explore Page</h1>
                <Search />
                <ShowList listOfShows={this.props.showsList} />
            </div>
        );
    }
}

Explore.propTypes = {
    showsList: PropTypes.array.isRequired,
    loadShows: PropTypes.func.isRequired,
};

export default connect(
    state => ({ showsList: state.showsState.showsList }),
    { loadShows },
)(Explore);
