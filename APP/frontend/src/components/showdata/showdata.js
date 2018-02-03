import React from 'react';
import { PropTypes } from 'prop-types';

const getSummary = (html) => (
    { __html: html }
);

const ShowData = ({ data }) => (
    <div>
        <h1>{data.name}</h1>

        <div className="show__image">
            <img src={data.image.medium} alt={data.name} />
        </div>

        <div className="show__data">
            <p>{data.type} Rating: {data.rating.average}</p>
            <p>{data.status}</p>
            <ul>
                {data.genres.map((genre) => <li key={genre}>{genre}</li>)}
            </ul>
            <div dangerouslySetInnerHTML={getSummary(data.summary)} />
        </div>
    </div>
);

ShowData.propTypes = {
    data: PropTypes.object.isRequired,
};

export default ShowData;
