import { configureStore } from "@reduxjs/toolkit";
import MovieDetailReducers from "../chingqueue/components/reducers/MovieDetailReducers";
import userReducer from '../chingqueue/components/reducers/UserReducer';
import {loadState ,saveState} from '../../localStorage'

const persistedState = loadState();
const store = configureStore({
    reducer: {currentUser: userReducer,
        currentMovieDetail: MovieDetailReducers
    
    }
},persistedState);
store.subscribe(() => {
    saveState(store.getState());
});

export default store;