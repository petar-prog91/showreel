import { SEARCH_SHOW } from '../constants';

export const searchShow = (searchString) => ({
    type: SEARCH_SHOW,
    value: searchString,
});
