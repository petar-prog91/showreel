import { SHOWS_LOAD, SHOW_SEASONS_LOAD } from '../constants';

const initialState = {
    showsList: [],
};

const showsState = (state = initialState, action) => {
    switch (action.type) {
    case SHOWS_LOAD:
        return Object.assign({}, state, { showsList: action.showsList });
    case SHOW_SEASONS_LOAD: 
    const newShowState = Object.assign({}, state.showsList[0], { show: { ...state.showsList[0].show, seasons: action.seasons }});
        return Object.assign({}, state, { showsList: newShowState });
    default:
        return state;
    }
};

export default showsState;
