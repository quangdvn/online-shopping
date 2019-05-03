import axios from 'axios'
import getAuthToken from './getAuthToken'

const _makeRequest = axiosCreate => async args => {
    const {data} = await axiosCreate(args)
    return data
}

const _makeAuthRequest = axiosCreate => async args => {
    const headers = {
        Authorization: getAuthToken()
    }
    args = {
        ...args,
        headers
    }
    const data = await _makeRequest(axiosCreate)(args)
    return data
}

export default (options = {}) => {
    const baseURL = options.baseURL ? options.baseURL : ''
    const instance = axios.create({
        baseURL: baseURL,
        timeout: 30000
    })
    return {makeRequest: _makeRequest(instance),
    makeAuthRequest: _makeAuthRequest(instance)
}
}
