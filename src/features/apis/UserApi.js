import api from './api';

export const addUser = (userCreds) =>{

    return api.post("/users/register",userCreds)
}