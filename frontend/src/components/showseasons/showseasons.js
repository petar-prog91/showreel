import React from 'react';
import { PropTypes } from 'prop-types';

const ShowSeasons = ({ data }) => (
    <div className="show__showepisodes">
        <ul>
            {data.episodes.map((episode) => <li key={episode.id}>{episode.name}</li>)}
        </ul>
    </div>
);

ShowSeasons.propTypes = {
    data: PropTypes.object.isRequired,
};

export default ShowSeasons;
