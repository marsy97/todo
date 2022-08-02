import { useState,useRef } from "react";
import "./style.scss"
import Form from "./Components/Form"
import TodoList from "./Components/TodoList"




function App() {

const [inputText,setInputText]=useState("")
const [todo,setTodo]=useState([])




  return (
    <div className="App">
      <div className="app-container">
        <Form inputText={inputText} todo={todo} setTodo={setTodo} setInputText={setInputText}/>
        <TodoList todo={todo} setTodo={setTodo}/>
      </div>
    </div>
  );
}

export default App;
