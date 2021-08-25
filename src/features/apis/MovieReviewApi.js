import api from "./api";


export const addMovieReview = (reviewDetails)=>{

    return api.post("/movie-reviews", reviewDetails)
}

export const getMovieReviews = () => {
    return api.get("/movie-reviews")
}