import api from './api'

export const LoginUser = (userCreds) => {
    return api.get('/login', userCreds)
}
