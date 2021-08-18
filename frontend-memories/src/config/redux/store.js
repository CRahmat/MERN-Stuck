const {createStore} = require('redux')

const initialState = {
    Content:[],
    name: "User"
}

const reducer = (state = initialState, action) => {
    if(action.type === "UPDATE_CONTENTS"){
        return{
        ...state,
        Content: action.payload 
        }
    }
    if(action.type === "UPDATE_NAME"){
        return{
        ...state,
        name: ""
        }
    }
    return state;
}

const store = createStore(reducer);

export default store;