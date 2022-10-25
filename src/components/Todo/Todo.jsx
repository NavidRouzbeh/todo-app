import React from "react";
import './Todo.style.css'

const Todo = ({id,title,description,state,onClick,onClickUpdate}) => {

    return(
        <div className="card">
            <div><h1>{id}</h1></div>
            <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{state}</p>
            </div>
            <div className="modifyButtons">
            <button onClick={onClick} className="deleteButton">DELETE</button>
            <button onClick={onClickUpdate} className="updateButton">UPDATE</button>
            </div>
        </div>
    )
}

export default Todo