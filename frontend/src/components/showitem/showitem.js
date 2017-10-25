import React from 'react';
import { PropTypes } from 'prop-types';

const ShowItem = ({ data }) => (
    <div className="showitem">{ data }</div>
);

ShowItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default ShowItem;
