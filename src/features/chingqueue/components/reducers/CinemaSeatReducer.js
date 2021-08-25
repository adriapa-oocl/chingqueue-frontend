
import { createSlice,createEntityAdapter } from "@reduxjs/toolkit";

const cinemaSeatAdapter = createEntityAdapter();
const initialState = cinemaSeatAdapter.getInitialState({
    ids: [],
    entities: {},
})

const cinemaSeatSlice = createSlice({
    name: "cinemaSeats",
    initialState,
    reducers: {
        AddAllCinemaSeats(state, action) {
            cinemaSeatAdapter.addMany(state, action.payload)
        },
        UpdateCinemaSeat(state, action) {
            cinemaSeatAdapter.updateOne(state, {
                id: action.payload.id,
                changes: action.payload
            })
        },
    }
});

export const {AddAllCinemaSeats, UpdateCinemaSeat} = cinemaSeatSlice.actions;
export const {selectAll: selectAllCinemaSeats, selectIds: selectAllCinemaSeatIds, selectById: selectCinemaSeatById} = cinemaSeatAdapter.getSelectors((state) => state.cinemaSeats);

export default cinemaSeatSlice.reducer;