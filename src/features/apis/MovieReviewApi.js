import api from "./api";


export const addMovieReview = (reviewDetails)=>{

    return api.post("/movie-reviews", reviewDetails)
}