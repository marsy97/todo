import React from "react"
import "../style.scss"
import { useState } from "react";


const Todo =({text,item,todo,setTodo})=>{

    let startingText = "First"
    const [toggle,setToggle]=useState(false)
    const [outputText, setOutputText] = useState(startingText)

    function textChange() {
        setToggle(!toggle)
        
        toggle ? setOutputText(startingText) : setOutputText("eadaeaedaedaedaedae")
        
    }

    const deleteHandle=()=>{
       setTodo(todo.filter((el)=>el.id!==item.id))

    }


    const completeHandle=()=>{
        


    }

    return(
        <div className="todo">
            <li className="todo-item" style={{background:toggle?'green':'red'}}>{text}</li>
            <button onClick={textChange} className="completed">{outputText}</button>
            <button onClick={deleteHandle} className="delete">delete</button>
            
        </div>


    );
}

export default Todo