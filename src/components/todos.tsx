"use client"

import React from 'react';
import {useTodos} from "@/store/todos";
import {Simulate} from "react-dom/test-utils";
import toggle = Simulate.toggle;

const Todos = () => {
    const {todos , toggleTodoAsCompleted, handleTodoDelete} = useTodos()
    console.log(todos)
    let filterTodos = todos;
    return (

       <ul>
           {
               filterTodos.map( (todo) =>{
return <li key={todo.id}>

    <input type="checkbox" name="" id={`todo-${todo.id}`} checked={todo.completed} onChange={() => toggleTodoAsCompleted(todo.id)}/>

    <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
    {
        todo.completed &&(
            <button type="button" onClick={() => handleTodoDelete(todo.id)}>
Delete
            </button>
        )
    }
</li>

               })
           }
       </ul>
    );
};

export default Todos;