import { SHOWS_LOAD } from '../constants';

export const loadShows = (showsList) => ({
    type: SHOWS_LOAD,
    showsList,
});
