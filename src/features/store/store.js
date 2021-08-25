import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../chingqueue/components/reducers/UserReducer';
import movieReducer from '../chingqueue/components/reducers/MovieReducer';

const store = configureStore({
    reducer: {currentUser: userReducer, movieList: movieReducer}
});

export default store;