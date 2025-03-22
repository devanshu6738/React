import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"counter",
    initialState:{
        value:0,
    },
    reducers:{
        increment:(state,action)=>{
            state.value++;
        },
        decrement:(state,action)=>{
            state.value--;
        },
        reset:(state,action)=>{
            state.value=0;
        }
    }
})

export const {increment,decrement,reset}=counterSlice.actions
export default counterSlice.reducer