import createAPI from './API'

const getBaseURL = () => {
    //  const url = 'https://authlivs.herokuapp.com'
    return process.env.NODE_ENV === 'development'
          ? 'http://localhost:5000'
       // :  : '/api'
         : 'https://authlivs.herokuapp.com'
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


export const makeSignUpRequest = ({username = ' ', password = '', email=''}) => {
    return api.makeRequest({
        url: '/signup',
        method: 'POST',
        data: {
            username,
            password,
            email
        }
    })
}


export const getUserByToken = () => {
    return api.makeAuthRequest({
        url: '/user',
        method: 'GET'
    })
}
