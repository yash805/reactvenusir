import React, { useState } from 'react';
import './Todo.css';

const Todo = () => {
  const [todo,setTodo] = useState([]);
  const [inputText,setInputText] = useState('');

  function handleTodo(){
     setTodo([...todo, inputText]);
      setInputText("");
  }
  return (
    <div className='main'>
        <div className='center'>
            <input 
            type="text" 
            className="input" 
            value={inputText}
            placeholder="Enter the value"
            onChange={(e)=>setInputText(e.target.value)}
            />
            <button className="add" onClick={handleTodo}>Add</button>
         <div className='b'>
            <ul>
                {todo.map((a,index)=>
                     <li>{a}
                       
                     </li>
                    
                )}
            </ul>
         </div>

        </div>
      
    </div>
  )
}

export default Todo


//filter method