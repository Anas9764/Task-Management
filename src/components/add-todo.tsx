'use client'
import {FormEvent, useState} from "react";
import {useTodos} from "@/store/todos";

export function AddTodo() {
    const[todo, setTodo ] = useState("");
    const { handleAddTodo } = useTodos();
    


    function handleFormSubmit (e:FormEvent<HTMLFormElement>){
        e.preventDefault();
        handleAddTodo(todo) // to add the data in an array
        setTodo("");
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <input id="addtaskinput" type="text" className=" border-2 border-amber-500 rounded-lg m-3 px-3 py-2 text-lg tracking-tighter" placeholder="Write your task" name="" value={todo} onChange={(event) => setTodo(event.target.value) }/>
          <button className="h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800" type="submit" > Add </button>
        </form>
    );
};

export default AddTodo;