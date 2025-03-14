import { createSlice } from "@reduxjs/toolkit";


const counterSlice=createSlice({
    name:"counter",
    initialState:{      
        value:0,
    },
    reducers:{
        increment:(state,action)=>{
            console.log("Devanshu")
            console.log(JSON.stringify(state))
            
            state.value=state.value+1
            
        },
        decrement:(state,action)=>{
            state.value=state.value-1
        },
        reset:(state,action)=>{
            state.value=0
        }
    }
    // name:"todo",
    // initialState:{
    //     todos:[],
    // },
    // reducers:{
    //     addTodo:(state,action)=>{
    //         todo={id:1,title:action.payload}
    //         state.todos.push(todo)
    //     },
    //     updateTodo:()=>{},
    //     deleteAllTodo:(state)=>{
    //         state.todos=[]
    //     },
    //     markAsReadTodo:()=>{},
    //     deleteTodo:()=>{}
    // }
})
export const {increment,decrement,reset}=counterSlice.actions

export default counterSlice.reducer