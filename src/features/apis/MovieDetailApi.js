import api from './api'

export const getMovieDetails = (movieId) => {
    return api.get(`/moviedetails/${movieId}`)
}
