import { LOG_IN, LOG_OUT, SAVE_JWT_TOKEN } from '../constants';

const initialState = {
    isLoggedIn: false,
    jwtToken: null,
};

const appState = (state = initialState, action) => {
    switch (action.type) {
    case LOG_IN:
        return Object.assign({}, state, {
            isLoggedIn: true,
        });
    case LOG_OUT:
        return Object.assign({}, state, {
            isLoggedIn: false,
        });
    case SAVE_JWT_TOKEN:
        window.sessionStorage.setItem('SHOWREEL_JWTToken', action.value);

        return Object.assign({}, state, {
            jwtToken: action.value,
        });
    default:
        return state;
    }
};

export default appState;
