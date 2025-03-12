import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:"Authslice",
    initialState:{
        userData:JSON.parse(localStorage.getItem("userData")) || null
    },
    reducers:{
        addUserdata:()=>{},
        removeUserData:()=>{}
    }
})
export const {addUserdata,removeUserData}=authSlice.actions;
export default authSlice.reducer