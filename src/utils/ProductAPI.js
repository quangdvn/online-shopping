import createAPI from './API'

const getBaseURL = () => {
    //  const url = 'https://authlivs.herokuapp.com'
    return process.env.NODE_ENV === 'development'
      ? 'http://localhost:4000/api/product'
       : 'https://sitibapi.herokuapp.com/api/product'
       // : '/api'
}

const options = {
    baseURL: getBaseURL()
}

const api = createAPI(options)

export const getProducts = () => {
    return api.makeRequest({
        url: '/',
        method: 'GET'
    })
}
