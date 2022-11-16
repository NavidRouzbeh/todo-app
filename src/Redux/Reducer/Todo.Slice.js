import { createSlice } from "@reduxjs/toolkit";

const initialState =    [ 
    {id:1 , title:'buy milk' , priority:"low" , desc:'1111', isDone:false},
    {id:2 , title:'Read book' , desc:'2220', isDone:true}
]
export const TodoSlice=createSlice({
    name:'todos',
    initialState,
    reducers:{
        
        addTodo:(state,action) => {
            state.push(action.payload)
        },

        deleteTodo:(state,action) => {
            const index=state.findIndex(item => item.id===action.payload)
            state.splice(index,1)
        },

        updateTodo:(state,action) => {
            const index=state.findIndex(item => item.id===action.payload.id)
            state[index]=action.payload
        },

        doneTodo:(state,action) => {
            const index=state.findIndex(item => item.id===action.payload)
            state[index].isDone =! state[index].isDone
        }

    }
});

export const{addTodo,deleteTodo,updateTodo,doneTodo} = TodoSlice.actions
export default TodoSlice.reducer