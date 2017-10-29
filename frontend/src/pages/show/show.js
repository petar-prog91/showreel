import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { TV_MAZE_API } from '../../constants';
import statusHandle from '../../utils/statusHandle';

import { loadShows, loadSeasonsForShow } from '../../actions/shows';

class Show extends React.Component {
    componentDidMount() {
        fetch(`${TV_MAZE_API + '/shows/' + this.props.params.id}`)
        .then(statusHandle)
        .then(response => response.json())
        .then(response => [{ show: response }])
        .then(response => this.props.loadShows(response))
        .then(this.getShowSeasons())
        .catch(error => Promise.reject(error));
    }

    getShowSeasons() {
        return fetch(`${TV_MAZE_API + '/shows/' + this.props.params.id + '/seasons'}`)
        .then(statusHandle)
        .then(response => response.json())
        .then(response => this.props.loadSeasonsForShow(response))
        .catch(error => Promise.reject(error));
    }

    getSummary() {
        return { __html: this.props.showsList[0].show.summary };
    }

    render() {
        return (
            <div className="show__base">
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

                <div className="show__showseasons">
                    <ul>
                        {this.props.showsList[0].show.seasons.map((season) => <li key={season.id}>{season.id}</li>)}
                    </ul>
                </div>
            </div>
        );
    }
}

Show.propTypes = {
    showsList: PropTypes.array.isRequired,
    loadShows: PropTypes.func.isRequired,
    loadSeasonsForShow: PropTypes.func.isRequired,
    params: PropTypes.any.isRequired,
};

export default connect(
    state => ({ showsList: state.showsState.showsList }),
    { loadShows, loadSeasonsForShow },
)(Show);
