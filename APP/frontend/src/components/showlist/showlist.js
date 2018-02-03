import React from 'react';
import { PropTypes } from 'prop-types';
import ShowItem from '../../components/showitem/showitem';

const ShowList = ({ listOfShows }) => (
    <div className="showslist__base">
        { listOfShows.map((item) => <ShowItem data={item} key={item.show.id} />) }
    </div>
);

ShowList.propTypes = {
    listOfShows: PropTypes.array,
};

ShowList.defaultProps = {
    listOfShows: [],
};

export default ShowList;
