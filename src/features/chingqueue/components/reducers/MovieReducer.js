import { createSlice,createEntityAdapter} from "@reduxjs/toolkit";

const movieAdapter = createEntityAdapter();
const initialState = movieAdapter.getInitialState({
    ids: [],
    entities: {},
})

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        AddAllMoviesToState(state, action) {
            movieAdapter.addMany(state, action.payload)
        },
    }
});

export const {AddAllMoviesToState} = movieSlice.actions;
export const {selectAll: selectAllMovies} = movieAdapter.getSelectors((state) => state.movieList);
export default movieSlice.reducer;
