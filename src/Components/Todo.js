import React from "react"
import "../style.scss"
import { useState } from "react";


const Todo =({text,item,key,todo,setTodo})=>{

    let edit = "EDIT"
    const [toggle,setToggle]=useState(true)
    const [outputText, setOutputText] = useState(edit)


    function textChange() {
        setToggle(!toggle)
        toggle ? setOutputText("SAVE") : setOutputText(edit)  
          
    }

    const deleteHandle=()=>{
       setTodo(todo.filter((el)=>el.id!==item.id))

    }


    return(
        <div className="todo">
            <input key={key} type='text' style={{background:toggle?"":"purple"}}defaultValue={text} readOnly={toggle} className="todo-item"></input>

            <div className="buttons">
                <button onClick={textChange} style={{background:toggle?"purple":""}}className="edit">{outputText}</button>
                <button onClick={deleteHandle} className="delete">delete</button>
            </div>
            
        </div>


    );
}

export default Todo