import React from "react";
import { useDispatch } from "react-redux";
import { Grid, Typography } from "@mui/material";
import TodoSlice, {doneTodo} from "../../Redux/Reducer/Todo.Slice"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Todo = ({todo,onClick,onClickUpdate}) => {

        const dispatch=useDispatch()
        const handleIsDone = (id) => {
            dispatch(doneTodo(id))
        }

    return(
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography>
            {todo.id}
        </Typography>
        <Typography>
            {todo.title}
        </Typography>
        <Typography>
            {todo.desc}
        </Typography>
        <Typography>
            {todo.priority}
        </Typography>
      </CardContent>
    </Card>
    )
}

export default Todo