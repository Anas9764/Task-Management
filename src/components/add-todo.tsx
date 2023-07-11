"use client"
import React, {FormEvent, useState} from 'react';

const AddTodo = () => {
    const [todo , setTodo] = useState("")

    const handleFormSubmit =(e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        handleAddTodo(todo);
        setTodo("")

    }
    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Write your task" name="" value={todo} onChange={(event) => setTodo(event.target.value) }/>
          <button type="submit" > Add </button>
        </form>
    );
};

export default AddTodo;