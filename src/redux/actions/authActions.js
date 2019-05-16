import {GET_ERRORS, SET_CURRENT_USER} from './types'
import {makeLoginRequest, getUserByToken, makeSignUpRequest} from '../../utils/AuthAPI'

export const loginAction = (credential, history) => async dispatch => {
    const {success, data, message} = await makeLoginRequest(credential)
    if (!success) {
        return dispatch({
            type: GET_ERRORS,
            payload: {message}
        })
    }
    const {user, token} = data
    localStorage.setItem('token', token)
    dispatch(setCurrentUser(user))
    history.push('/')
}


export const signUpAction = (credential, history) => async dispatch => {
    const {success, data, message} = await makeSignUpRequest(credential)
    if (!success) {
        return dispatch({
            type: GET_ERRORS,
            payload: {message}
        })
    }
    const {user, token} = data
    localStorage.setItem('token', token)
    dispatch(setCurrentUser(user))
    history.push('/')
}

export const logoutAction =  () => async dispatch => {
    dispatch(setCurrentUser({}))
    localStorage.removeItem('token')
}

export const setCurrentUser = data => {
    return {
        type: SET_CURRENT_USER,
        payload: data
    }
}

export const getUser = () => async dispatch => {
    const {success, data} = await getUserByToken()
    if (!success) {
        return dispatch({
            type: SET_CURRENT_USER,
            payload: false
        })
    }
    const {user} = data
    dispatch(setCurrentUser(user))
}
