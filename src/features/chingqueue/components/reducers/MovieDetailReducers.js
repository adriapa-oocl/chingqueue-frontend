import { createSlice,createEntityAdapter} from "@reduxjs/toolkit";

const movieDetailAdapter = createEntityAdapter();
const initialState = movieDetailAdapter.getInitialState({
    ids: [],
    entities: {}
})

const movieDetailSlice = createSlice({
    name: "moviedetail",
    initialState,
    reducers: {
       addMovieDetails(state, action) {
           console.log('action payload', action.payload)
            movieDetailAdapter.addOne(state, action.payload)
        },
    }
});
export const {addMovieDetails} = movieDetailSlice.actions;
export const {selectById: selectByMovieId , selectAll: selectMovies,  } = movieDetailAdapter.getSelectors((state) => state.currentMovieDetail); 
export default movieDetailSlice.reducer;





