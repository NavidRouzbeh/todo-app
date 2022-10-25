import './App.css';
import React, { useState } from 'react';
import Todo from './components/Todo/Todo.jsx'

const todos = [
  {
    id:1,
    title:"homework",
    description:"do bootcamp homeworks",
    state:true
  },
  {
    id:2,
    title:"exercise",
    description:"do some cardio",
    state:false
  },
  {
    id:3,
    title:"reading",
    description:"read a book",
    state:true
  }
];



function App() {

  const [state,setState] = useState(todos);
  const [formData,setFormData] = useState ({
    id:'0',
    title:'',
    description:'',
    state:false
  });

  const [mode,setMode] = useState("create");
  const handleUpdate = (todo) => {
    setFormData(todo);
    setMode("update")
  }

  const additem = (e) =>{
    e.preventDefault()

    if(mode==="create"){
      setState([...state,{...formData,id: Math.floor(Math.random()*100)}])
    }
    else{
      setState(state.map(item =>(item.id===formData.id ?formData : item)))
    }
  }

  const deleteItem = (id) => {
    setState(state.filter((item) => item.id !==id))
  }

  const handleInputs = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  return (
    <div className='mainContainer'>
      <form onSubmit={additem} className='form'>
        <label>Title:</label>
        <input type="text" name='title' value={formData.title} onChange={handleInputs} className="input"></input>
        <label>Description:</label>
        <input type="text" name='description' value={formData.description} onChange={handleInputs} className="input"></input>
        <button type={'submit'} className='submitButton'>ADD</button>
      </form>
      <div className='cards'>
        {state.map((todo)=>(
          <Todo id={todo.id.toString()}
          title={todo.title}
          description={todo.description}
          state={todo.state}
          onClick={()=>deleteItem(todo.id)}
          onClickUpdate={()=>handleUpdate(todo)} />
        ))}
      </div>
    </div>
  )

}

export default App;
