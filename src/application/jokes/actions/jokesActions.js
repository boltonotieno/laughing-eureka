const LOAD_JOKE = 'LOAD_JOKE';
const LOAD_JOKE_SUCCESS = 'LOAD_JOKE_SUCCESS';
const LOAD_JOKE_FAIL = 'LOAD_JOKE_FAIL';

const loadJoke = category => ({
    type: LOAD_JOKE,
    category,
})

const loadJokeSuccessful = joke => ({
    type: LOAD_JOKE_SUCCESS,
    joke,
})

const loadJokeFailed = error => ({
    type: LOAD_JOKE_FAIL,
    error,
})

export {LOAD_JOKE, LOAD_JOKE_SUCCESS, LOAD_JOKE_FAIL, loadJoke, loadJokeSuccessful, loadJokeFailed };
