import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router';

const ShowItem = ({ data }) => (
    <div className="showslist__item">
        <Link to={'/show/' + data.show.id}>
            { data.show.image &&
                <img src={data.show.image.medium} alt={data.show.name} />
            }

            <h3>{data.show.name}</h3>
        </Link>
    </div>
);

ShowItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default ShowItem;
