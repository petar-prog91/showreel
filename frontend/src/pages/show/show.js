import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { TV_MAZE_API } from '../../constants';
import statusHandle from '../../utils/statusHandle';

import { loadShows, loadEpisodesForShow } from '../../actions/shows';

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

    renderStandardData() {
        return (
            <div>
                <h1>{this.props.showsList[0].show.name}</h1>

                <div className="show__image">
                    <img src={this.props.showsList[0].show.image.medium} alt={this.props.showsList[0].show.name} />
                </div>

                <div className="show__data">
                    <p>{this.props.showsList[0].show.type} Rating: {this.props.showsList[0].show.rating.average}</p>
                    <p>{this.props.showsList[0].show.status}</p>
                    <ul>
                        {this.props.showsList[0].show.genres.map((genre) => <li key={genre}>{genre}</li>)}
                    </ul>
                    <div dangerouslySetInnerHTML={this.getSummary()} />
                </div>
            </div>
        );
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
        let standardData = null;
        let showsEpisodes = null;
        if (this.props.showsList[0].show) {
            standardData = this.renderStandardData();
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
