import React, { useState } from 'react';

// Define the "Todo" type outside the component 
type Todo = {
   content : string ; // The property content is of type string
};

//Define the Todo component 
const Todo: React.FC = () => {
   const [todo, setTodo] = useState( '' );


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add task addition processing here 
    console .log( 'Todo added:' , todo);
    setTodo( '' ); // Reset the form
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        < input 
          type = "submit" 
          value = "add" 
        /> 
      </ form >
      {/* ↓ Sample to see DOM reactive behavior */}
      < p > {todo} </ p >
      {/* ↑ Delete later */}
    </div>
  );
};


export  default Todo;