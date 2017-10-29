import { SHOWS_LOAD, SHOW_SEASONS_LOAD } from '../constants';

export const loadShows = (showsList) => ({
    type: SHOWS_LOAD,
    showsList,
});

export const loadSeasonsForShow = (seasons) => ({
    type: SHOW_SEASONS_LOAD,
    seasons,
});
