import { SHOWS_LOAD, SHOW_EPISODES_LOAD } from '../constants';

export const loadShows = (showsList) => ({
    type: SHOWS_LOAD,
    showsList,
});

export const loadEpisodesForShow = (episodes) => ({
    type: SHOW_EPISODES_LOAD,
    episodes,
});
