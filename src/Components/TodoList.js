import React from "react"
import Todo from "./Todo"
import "../style.scss"

const TodoList =({todo,setTodo})=>{
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {todo.map(item=>(<Todo item={item} key={item.id}todo={todo} setTodo={setTodo} text={item.text}/>))}
            </ul>
        </div>


    );
}

export default TodoList