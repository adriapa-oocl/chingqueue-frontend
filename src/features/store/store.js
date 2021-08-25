import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../chingqueue/components/reducers/UserReducer';
import movieReducer from '../chingqueue/components/reducers/MovieReducer';
import CinemaReducer from "../chingqueue/components/reducers/CinemaReducer";
import reviewReducer from '../chingqueue/components/reducers/MovieReviewsReducer'
import cinemaSeatReducer from '../chingqueue/components/reducers/CinemaSeatReducer'

const store = configureStore({
    reducer: {currentUser: userReducer, movieList: movieReducer, reviewList: reviewReducer, cinemas: CinemaReducer, cinemaSeats: cinemaSeatReducer}
});

export default store;