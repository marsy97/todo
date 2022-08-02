import React from "react"
import "../style.scss"

const Form =({setInputText,todo,setTodo,inputText})=>{

    const inputTextHandle=(e)=>{
        setInputText(e.target.value)

    }

    const submitHandler=(e)=>{
        e.preventDefault()
        setTodo([...todo,{text:inputText, completed:false,id:Math.random()*1000}])
        
        
        setInputText("")
    }

    


    return(

        <form className="form">
            <input value={inputText} onChange={inputTextHandle} type="text" className="form-input"/>
            <button onClick={submitHandler} className="form-button" type="submit">Add</button>
        </form>


    );
}

export default Form