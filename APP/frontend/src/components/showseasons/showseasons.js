import React from 'react';
import { PropTypes } from 'prop-types';

const ShowSeasons = ({ data }) => (
    <div className="show__showepisodes">
        <ul>
            { data.seasons.map((seasons) => seasons.map((episode) => <li key={episode.name}>{episode.number}. {episode.name} - {episode.airdate}</li>)) }
        </ul>
    </div>
);

ShowSeasons.propTypes = {
    data: PropTypes.object.isRequired,
};

export default ShowSeasons;
