import React from 'react';
import { PropTypes } from 'prop-types';

const ShowItem = ({ data }) => (
    <ul className="showitem">
        <li>{data.show.name}</li>
    </ul>
);

ShowItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default ShowItem;
