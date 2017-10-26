import React from 'react';
import { PropTypes } from 'prop-types';
import ShowItem from '../../components/showitem/showitem';

const ShowList = ({ listOfShows }) => (
    <div>
        <h1>Shows</h1>
        <p>Here should be some kind of list</p>
        {
            listOfShows.map((item) => <ShowItem data={item} key={item.show.id} />)
        }
    </div>
);

ShowList.propTypes = {
    listOfShows: PropTypes.array,
};

ShowList.defaultProps = {
    listOfShows: [],
};

export default ShowList;
