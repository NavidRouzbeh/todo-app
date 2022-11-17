import React  from "react";
import { FormGroup , Button, FormControl, FormControlLabel, FormLabel, Grid , Radio, RadioGroup, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTodo , updateTodo } from '../../Redux/Reducer/Todo.Slice'


const Form = ({mode,setMode,formValues,setFormValues}) => {

    const dispatch=useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (mode === "create"){
            dispatch(addTodo ({...formValues,id: Math.floor(Math.random()*1000),isDone:false}))
        }

        else{
            dispatch(updateTodo(formValues))
        }

        setFormValues({
            title:'',
            desc:'',
        })

        setMode("create")

    };
  

   const handleInputChange = (e) => {
        setFormValues({...formValues,[e.target.name]:e.target.value})
    };
    console.log(formValues)

    return(

        <form onSubmit={handleSubmit}>
            <FormGroup>
            <Grid container alignItems="center" justifyContent="center">
                <Grid item>
                    <TextField 
                    type="text"
                    id="title_input"
                    name="title"
                    label="Title"
                    value={formValues.title}
                    onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <TextField 
                    type="text"
                    id="desc_input"
                    name="desc"
                    label="Description"
                    value={formValues.desc}
                    onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <FormControl>
                        <FormLabel>Priority</FormLabel>
                        <RadioGroup
                        name="priority"
                        value={formValues.priority}
                        onChange={handleInputChange}
                        row
                        >
                            <FormControlLabel 
                            key="urgent"
                            value="urgent"
                            control={<Radio size="small" />}
                            label="Urgent"
                            />
                            <FormControlLabel 
                            key="low"
                            value="low"
                            control={<Radio size="small" />}
                            label="Low"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Button variant="contained" color="primary" type="submit">
                    {mode === "create"?'ADD':'UPDATE'}
                </Button>
            </Grid>
            </FormGroup>
        </form>

    )

}

export default Form;