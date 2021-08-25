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
        RemoveUserFromState(state) {
            userAdapter.removeAll(state)
        }
    }
});

export const {AddUserToState, RemoveUserFromState} = userSlice.actions;
export const {selectAll: selectAllUser} = userAdapter.getSelectors((state) => state.currentUser);
export default userSlice.reducer;

