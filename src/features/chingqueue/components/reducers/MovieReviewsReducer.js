import { createSlice,createEntityAdapter} from "@reduxjs/toolkit";

const movieReviewsAdapter = createEntityAdapter();
const initialState = movieReviewsAdapter.getInitialState({
    ids: [],
    entities: {},
})

const movieReviewsSlice = createSlice({
    name: "movieReviews",
    initialState,
    reducers: {
        AddAllMovieReviewsToState(state, action) {
            movieReviewsAdapter.addMany(state, action.payload)
        },
    }
});

export const {AddAllMovieReviewsToState} = movieReviewsSlice.actions;
export const {selectAll: selectAllMovieReviews} = movieReviewsAdapter.getSelectors((state) => state.reviewList);
export default movieReviewsSlice.reducer;
