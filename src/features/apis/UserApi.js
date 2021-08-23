import api from './api'

export const LoginUser = (userCreds) => {
    return api.post('/users/login', userCreds)
}
