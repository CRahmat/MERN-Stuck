const {createStore} = require('redux')

const initialState = {
    Contents:[]
}

const reducer = (state = initialState, action) => {
    return state;
}

const store = createStore(reducer);

export default store;