import api from "./api";


export const getCinemasByMovieId = (movieId)=>{
    return api.get(`/cinemas/${movieId}`)
}