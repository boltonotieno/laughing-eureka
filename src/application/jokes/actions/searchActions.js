const LOAD_SEARCH = 'LOAD_SEARCH';
const LOAD_SEARCH_SUCCESS = 'LOAD_SEARCH_SUCCESS';
const LOAD_SEARCH_FAIL = 'LOAD_SEARCH_FAIL';

const loadSearch = (query) => ({
    type: LOAD_SEARCH,
    query
})

const loadSearchSuccessful =  searchResult => ({
    type: LOAD_SEARCH_SUCCESS,
    searchResult,
})

const loadSearchFailed = error => ({
    type: LOAD_SEARCH_FAIL,
    error,
})

export {LOAD_SEARCH, LOAD_SEARCH_SUCCESS, LOAD_SEARCH_FAIL, loadSearch, loadSearchSuccessful, loadSearchFailed };
