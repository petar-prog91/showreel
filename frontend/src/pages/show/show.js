import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { TV_MAZE_API } from '../../constants';
import statusHandle from '../../utils/statusHandle';

import { loadShows, loadEpisodesForShow } from '../../actions/shows';
import { ShowData } from '../../components';

class Show extends React.Component {
    componentDidMount() {
        fetch(`${TV_MAZE_API + '/shows/' + this.props.params.id}`)
        .then(statusHandle)
        .then(response => response.json())
        .then(response => [{ show: response }])
        .then(response => this.props.loadShows(response))
        .then(this.getShowEpisodes())
        .catch(error => Promise.reject(error));
    }

    getShowEpisodes() {
        return fetch(`${TV_MAZE_API + '/shows/' + this.props.params.id + '/episodes'}`)
        .then(statusHandle)
        .then(response => response.json())
        .then(response => this.props.loadEpisodesForShow(response))
        .catch(error => Promise.reject(error));
    }

    getSummary() {
        return { __html: this.props.showsList[0].show.summary };
    }

    renderShowEpisodes() {
        return (
            <div className="show__showepisodes">
                <ul>
                    {this.props.showsList[0].show.episodes.map((episode) => <li key={episode.id}>{episode.name}</li>)}
                </ul>
            </div>
        );
    }

    render() {
        let standardData;
        let showsEpisodes;

        if (this.props.showsList[0].show) {
            standardData = <ShowData data={this.props.showsList[0].show} />;
        }

        if (this.props.showsList[0].show.episodes) {
            showsEpisodes = this.renderShowEpisodes();
        }

        return (
            <div className="show__base">
                {standardData}

                {showsEpisodes}
            </div>
        );
    }
}

Show.propTypes = {
    showsList: PropTypes.array.isRequired,
    loadShows: PropTypes.func.isRequired,
    loadEpisodesForShow: PropTypes.func.isRequired,
    params: PropTypes.any.isRequired,
};

export default connect(
    state => ({ showsList: state.showsState.showsList }),
    { loadShows, loadEpisodesForShow },
)(Show);
