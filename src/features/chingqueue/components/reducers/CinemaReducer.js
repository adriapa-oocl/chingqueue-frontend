
import { createSlice,createEntityAdapter} from "@reduxjs/toolkit";

const cinemaAdapter = createEntityAdapter();
const initialState = cinemaAdapter.getInitialState({
    ids: [],
    entities: {},
})

const cinemaSlice = createSlice({
    name: "cinemas",
    initialState,
    reducers: {
        AddCinemas(state, action) {
            cinemaAdapter.addMany(state, action.payload)
        },
    }
});

export const {AddCinemas} = cinemaSlice.actions;
export const {selectAll: selectAllCinemas, selectIds: selectCinemaIds} = cinemaAdapter.getSelectors((state) => state.cinemas);

export default cinemaSlice.reducer;
