import axios from 'axios'

const api = axios.create({
    // baseURL: 'http://localhost:8080'
    baseURL: 'https://61235632d446280017054b20.mockapi.io/'
})

export default api;
