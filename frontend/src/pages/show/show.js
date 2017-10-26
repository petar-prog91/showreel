import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { TV_MAZE_API } from '../../constants';
import statusHandle from '../../utils/statusHandle';

import { loadShows } from '../../actions/shows';

class Show extends React.Component {
    componentDidMount() {
        fetch(`${TV_MAZE_API + '/shows/' + this.props.params.id}`)
        .then(statusHandle)
        .then(response => response.json())
        .then(response => [{ show: response }])
        .then(response => this.props.loadShows(response))
        .catch(error => Promise.reject(error));
    }

    render() {
        return (
            <div className="show__base">
                <h1>{this.props.showsList[0].show.name}</h1>

                <div className="show__image">
                    <img src={this.props.showsList[0].show.image.medium} alt={this.props.showsList[0].show.name} />
                </div>

                <div className="show__data">
                    {this.props.showsList[0].show.summary}

                    <ul>
                        {this.props.showsList[0].show.genres.map((genre) => <li>{genre}</li>)}
                    </ul>
                </div>
            </div>
        );
    }
}

Show.propTypes = {
    showsList: PropTypes.array.isRequired,
    loadShows: PropTypes.func.isRequired,
    params: PropTypes.any.isRequired,
};

export default connect(
    state => ({ showsList: state.showsState.showsList }),
    { loadShows },
)(Show);
