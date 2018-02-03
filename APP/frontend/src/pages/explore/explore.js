
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
        if (this.props.search.search !== '') {
            fetch(`${TV_MAZE_API + '/search/shows?q=' + this.props.search.search}`)
            .then(statusHandle)
            .then(response => response.json())
            .then(response => this.props.loadShows(response))
            .catch(error => Promise.reject(error));
        }
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
    search: PropTypes.object.isRequired,
};

export default connect(
    state => ({ showsList: state.showsState.showsList, search: state.search }),
    { loadShows },
)(Explore);
