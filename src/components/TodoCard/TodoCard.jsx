import React from "react";
import { Button, Grid, Typography , Checkbox , FormControlLabel } from "@mui/material";
// import TodoSlice, {deleteTodo, doneTodo} from "../../Redux/Reducer/Todo.Slice"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Todo = ({todo,onClick,onClickUpdate}) => {

    

    return(
        <Card item sx={{ width: '25%' , m:1.5 }}>
        <CardContent>
            <Typography>
                {todo.title}
            </Typography>
            <Typography>
                {todo.desc}
            </Typography>
            <Typography>
                {todo.priority}
            </Typography>
            <FormControlLabel control={<Checkbox />} label="DONE" />        
            <Button variant="contained" color="error" onClick={onClick} sx={{mr:1.5}}>delete</Button>
            <Button variant="contained" color="primary" onClick={onClickUpdate}>update</Button>
        </CardContent>
        </Card>
    )
}

export default Todo