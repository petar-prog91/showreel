import { SHOWS_LOAD } from '../constants';

const initialState = {
    showsList: [],
};

const showsState = (state = initialState, action) => {
    switch (action.type) {
    case SHOWS_LOAD:
        return Object.assign({}, state, { showsList: action.showsList });
    default:
        return state;
    }
};

export default showsState;
