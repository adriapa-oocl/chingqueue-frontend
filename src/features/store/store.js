import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../chingqueue/components/reducers/UserReducer';

const store = configureStore({
    reducer: {currentUser: userReducer}
});

export default store;