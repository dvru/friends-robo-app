import { CHANGE_SEARCH_FIELD } from './constants.js'

export const setSearchField = (text) => ({ // text is user input
    type: CHANGE_SEARCH_FIELD,
    payload: text
})
