import createAPI from './API'

const getBaseURL = () => {
    const url = 'https://authlivs.herokuapp.com'
    return url
}

const options = {
    baseURL: getBaseURL()
}

const api = createAPI(options)

export const makeLoginRequest = ({username = ' ', password = ''}) => {
    return api.makeRequest({
        url: '/login',
        method: 'POST',
        data: {
            username,
            password
        }
    })
}

export const getUserByToken = () => {
    return api.makeAuthRequest({
        url: '/user',
        method: 'GET'
    })
}
