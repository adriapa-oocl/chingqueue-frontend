import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../chingqueue/components/reducers/UserReducer';
import movieReducer from '../chingqueue/components/reducers/MovieReducer';
import reviewReducer from '../chingqueue/components/reducers/MovieReviewsReducer'

const store = configureStore({
    reducer: {currentUser: userReducer, movieList: movieReducer, reviewList: reviewReducer}
});

export default store;