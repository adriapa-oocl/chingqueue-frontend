import api from './api'

export const LoginUser = (userCreds) => {
    return api.post('/users/login', userCreds)
}

export const addUser = (userCreds) =>{

    return api.post("/users/register",userCreds)
}