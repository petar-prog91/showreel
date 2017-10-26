import React from 'react';
import { PropTypes } from 'prop-types';

const ShowItem = ({ data }) => (
    <div className="showitem__base">
        <img src={data.show.image.medium} alt={data.show.name} />
        <h3>{data.show.name}</h3>
    </div>
);

ShowItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default ShowItem;
