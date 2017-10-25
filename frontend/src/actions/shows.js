import { SHOWS_LOAD } from '../constants';

export const loadShows = (shows) => ({
    type: SHOWS_LOAD,
    showsList: shows,
});
