import { combineReducers } from 'redux'

import { EXAMPLE_ACTION, COUNT } from '../actions/actionTypes'

const settings = (state = { title: 'hello', count: 0 }, action) => {
    switch (action.type) {
        case EXAMPLE_ACTION:
            return { ...state, title: action.payload }
        case COUNT:
            return { ...state, count: action.payload}
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    settings
})