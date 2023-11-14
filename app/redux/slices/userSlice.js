
import { createSlice } from "@reduxjs/toolkit";
const user = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        login: (state, action) => {
            state = action.payload
        },
        logout: (state, action) => {
            state = null
        }
    }
})
export const { login, logout } = user.actions;
export default user.reducer;