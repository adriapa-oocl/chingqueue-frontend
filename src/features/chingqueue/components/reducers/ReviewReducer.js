import { createSlice,createEntityAdapter} from "@reduxjs/toolkit";

const reviewAdapter = createEntityAdapter();
const initialState = reviewAdapter.getInitialState({
    ids: [],
    entities: {},
})

const reviewSlice = createSlice({
    name: "review",
    initialState,
    reducers: {
        AddAllReviewsToState(state, action) {
            reviewAdapter.addMany(state, action.payload)
        },
    }
});

export const {AddAllReviewsToState} = reviewSlice.actions;
export default reviewSlice.reducer;
