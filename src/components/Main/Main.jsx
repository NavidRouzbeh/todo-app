import { Grid } from "@mui/material";
import React,{useState} from "react";
import Form from '../Form/Form';
import TodoList from '../TodoList/TodoList'

const Main = () => {

    const [formValues,setFormValues]=useState({

        id:Math.floor(Math.random()*1000),
        title:'',
        desc:'',
        priority:'',
        isDone:false

    });

    const [mode,setMode] = useState("create")

    return(

        <Grid container>
            <Form mode={mode} setMode={setMode} formValues={formValues} setFormValues={setFormValues} />
            <TodoList setMode={setMode} setFormValues={setFormValues}/>
        </Grid>

    )

}

export default Main;