import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import TodoCard from '../TodoCard/TodoCard';
import { deleteTodo } from '../../Redux/Reducer/Todo.Slice';
import { Grid , Box } from '@mui/material';

const TodoList = ({setMode,setFormValues}) => {

    const todos = useSelector(state=>state.todos)
    const dispatch = useDispatch()
    const deleteItem = (id) => {
        dispatch(deleteTodo(id))
    }
    const handleUpdate = (todo) => {
        setFormValues(todo);
        setMode("update")
    }

    return(
  
        <Grid container alignContent={"center"} spacing={"2"} flexDirection="column">
            {todos.map((todo)=>(
                <TodoCard  key={todo.id}
                todo={todo}
                onClick={()=>deleteItem(todo.id)}
                onClickUpdate={()=>handleUpdate(todo)}
                />
            ))}
        </Grid>


    )

}

export default TodoList;