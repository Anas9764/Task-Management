"use client"
import {useTodos} from "@/store/todos";
import { useSearchParams } from "next/navigation";

export  const Todos = () => {
    const {todos, toggleTodoAsCompleted, handleDeleteTodo} = useTodos();

    const searchParams = useSearchParams();
    const todosFilter = searchParams.get('todos')
    console.log("params " + todosFilter)

    let filteredTodos = todos;

    if (todosFilter === "active") {
        filteredTodos = todos.filter((todo) => !todo.completed);
    } else if (todosFilter === "completed") {
        filteredTodos = todos.filter((todo) => todo.completed);
    }



    return (
        <ul className="main-task">
            {
                filteredTodos.map((todo) => {
                    return <li className="grid grid-cols-3 items-center w-96 h-14 border-2 text-3xl
                    " key={todo.id}>

                        {/*Assigns a unique ID to the checkbox. The ID is created by concatenating the string "todo-" with the id property of the todo object.*/}
                        <input type="checkbox" id={`todo-${todo.id}`} checked={todo.completed} onChange={() => {
                            console.log(todo.completed)
                            toggleTodoAsCompleted(todo.id)}
                        } />

                        <label htmlFor={`todo-${todo.id}`}> {todo.task}</label>

                        {
                            todo.completed && (
                                <button className="h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-red-600 rounded-lg focus:shadow-outline hover:bg-red-400" type="button" onClick={() => handleDeleteTodo(todo.id)}>
                                    Delete
                                </button>
                            )
                        }

                    </li>
                })
            }
        </ul>
    )
}