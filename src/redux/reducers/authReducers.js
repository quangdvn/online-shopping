import {SET_CURRENT_USER} from '../actions/types'

const initialState = {
    isAuthenticated: false,
    user: {},
    loading: true
}

export const setCurrentUser = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                loading: false,
                isAuthenticated: Object.keys(action.payload).length ? true : false,
                user: action.payload
            }
        default:
            return state
    }
}
