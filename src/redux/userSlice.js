import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "cookies-next";


const userSlice = createSlice({
        name: "user",
        initialState: {
            userId: getCookie("userId") || false,
            token: getCookie("accessToken") || false,
            loading:false
        },
        reducers:{
            updateUser: (state, action) => {
                state.user = action.payload;
              },
              updateToken: (state, action) => {
                state.token = action.payload;
              },
              setLoading: (state, action) => {
                state.loading = action.payload;
              }
        }
})
export const {updateToken,updateUser,setLoading}=userSlice.actions
 
export default userSlice.reducer