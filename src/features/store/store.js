import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../chingqueue/components/reducers/UserReducer';
import movieReducer from '../chingqueue/components/reducers/MovieReducer';
import CinemaReducer from "../chingqueue/components/reducers/CinemaReducer";


const store = configureStore({
    reducer: {currentUser: userReducer, movieList: movieReducer, cinemas: CinemaReducer}
});

export default store;