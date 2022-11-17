import { createSlice } from "@reduxjs/toolkit";

const initialState =    []
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

    }
});

export const{addTodo,deleteTodo,updateTodo,doneTodo} = TodoSlice.actions
export default TodoSlice.reducer