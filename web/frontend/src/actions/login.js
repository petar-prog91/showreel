import { LOG_IN, LOG_OUT, FETCH_JWT_TOKEN, SAVE_JWT_TOKEN } from '../constants';

export const fetchJWTToken = () => ({
    type: FETCH_JWT_TOKEN,
});

export const saveJWTToken = (jwtToken) => ({
    type: SAVE_JWT_TOKEN,
    value: jwtToken,
});

export const logInUser = () => ({
    type: LOG_IN,
});

export const logOutUser = () => ({
    type: LOG_OUT,
});
