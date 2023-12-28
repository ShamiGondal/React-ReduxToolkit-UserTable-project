import { createSlice } from "@reduxjs/toolkit"


const UserSlice = createSlice({

    name : 'User',
    initialState: [],
    reducers :{
        addUser(state,action) {
            state.push(action.payload)
        },
        removeUser(state,action) {
            state.splice(action.payload, 1)
        },
        // eslint-disable-next-line
        deleteUser(state,action) {
            return [];
        },
    }


})


export default UserSlice.reducer;
export const {addUser,removeUser,deleteUser} = UserSlice.actions;