import { Grid } from "@mui/material";
import React,{useState} from "react";
import Form from '../Form/Form';
import TodoList from '../TodoList/TodoList'

const Main = () => {

    const [formValues,setFormValues]=useState({

        id:'',
        title:'',
        desc:'',
        priority:'',
        isDone:false

    });

    const [mode,setMode] = useState("create")

    return(

        <Grid container bgcolor={"danger"} sx={{m:10}} flexDirection={"column"} justifyContent={"center"}>
            <Form mode={mode} setMode={setMode} formValues={formValues} setFormValues={setFormValues} />
            <TodoList setMode={setMode} setFormValues={setFormValues}/>
        </Grid>

    )

}

export default Main;