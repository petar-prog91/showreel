import { SHOWS_LOAD, SHOW_EPISODES_LOAD } from '../constants';

const initialState = {
    showsList: [],
};

const filterBySeason = (episodes) => episodes.reduce((array, episode) => {
    const newArray = array;
    if (!newArray[episode.season]) {
        newArray[episode.season] = [];
    }

    newArray[episode.season].push(episode);

    return newArray;
}, []);

const showsState = (state = initialState, action) => {
    switch (action.type) {
    case SHOWS_LOAD:
        return Object.assign({}, state, { showsList: action.showsList });
    case SHOW_EPISODES_LOAD: {
        const newShowsList = [...state.showsList];
        newShowsList[0].show.seasons = filterBySeason(action.episodes);

        return Object.assign({}, state, {
            showsList: newShowsList,
        });
    }

    default:
        return state;
    }
};

export default showsState;
