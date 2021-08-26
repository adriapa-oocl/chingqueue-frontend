import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const seatAdapter = createEntityAdapter();
const initialState = seatAdapter.getInitialState({
    ids: ["1"],
    entities: {
        1: {
            id: "1",
            selected: false
        }
    }
})

const seatSlice = createSlice({
    name: "seats",
    initialState,
    reducers: {
        ToggleSeat(state, action){
            seatAdapter.updateOne(state, {
                id: action.payload.id,
                changes: action.payload.updateSeat
            })
        }
    }
})

export const { ToggleSeat } = seatSlice.actions;

export const { selectById: selectSeatById} = seatAdapter.getSelectors((state) => state.seatList);

export default seatSlice.reducer;