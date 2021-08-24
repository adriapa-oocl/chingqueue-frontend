import { configureStore } from "@reduxjs/toolkit";
import MovieDetailReducers from "../chingqueue/components/reducers/MovieDetailReducers";
import userReducer from '../chingqueue/components/reducers/UserReducer';

const store = configureStore({
    reducer: {currentUser: userReducer,
        currentMovieDetail: MovieDetailReducers
    }
});

export default store;