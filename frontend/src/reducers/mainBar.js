import { TOGGLE_MAINBAR } from '../constants';

const initialState = {
    isOpen: false,
};

const mainBar = (state = initialState, action) => {
    if (action.type === TOGGLE_MAINBAR) {
        if (!state.isOpen) {
            return { isOpen: true };
        }

        return { isOpen: false };
    }

    return state;
};

export default mainBar;
