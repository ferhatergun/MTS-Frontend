import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
        name: "user",
        initialState: {
            user:   /* JSON.parse(localStorage.getItem("user"))  ||  */ false,
            token:  /* localStorage.getItem("token")  || */   false,
        },
        reducers:{
            updateUser: (state, action) => {
                state.user = action.payload;
              },
              updateToken: (state, action) => {
                state.token = action.payload;
              },
        }
})
export const {updateToken,updateUser}=userSlice.actions

export default userSlice.reducer