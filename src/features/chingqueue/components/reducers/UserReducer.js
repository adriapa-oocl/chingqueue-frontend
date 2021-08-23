import { createSlice,createEntityAdapter} from "@reduxjs/toolkit";

const userAdapter = createEntityAdapter();
const initialState = userAdapter.getInitialState({
    ids: [],
    entities: {},
})

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        AddUserToState(state, action) {
            userAdapter.addOne(state, {
                id: action.payload.user_id,
                userName: action.payload.username,
            })
        },
    }
});

export const {AddUserToState} = userSlice.actions;
export default userSlice.reducer;
