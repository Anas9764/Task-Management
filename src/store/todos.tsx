'use client'

import {createContext, ReactNode, useContext, useState} from "react";

export type Todo = {
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date;
}


export type TodosContext = {
    todos: Todo[];
    handleAddTodo: (task: string) => void; //call signature
    toggleTodoAsCompleted: (id: string) => void;
    handleDeleteTodo: (id: string) => void;
}

export const todosContext = createContext<TodosContext | null>(null)

export function TodosProvider({children}: { children: ReactNode }) {

    // The state variable todos is expected to be an array of Todo objects.
    const [todos, setTodos] = useState<Todo[]>(() => {
        try{
            const newTodos = localStorage.getItem('todos') || "[]";
            return JSON.parse(newTodos) as Todo[]
        }catch (e) {
            return []
        }

    }) //an array of Todo objects
    function handleAddTodo(task: string) {
        // it ensures that the newTodos variable is declared and initialized before returning it.
        setTodos((prev) => {
            // we will create a new array
            const newTodos: Todo[] = [
                {
                    id: Math.random().toString(),
                    task,
                    completed: false,
                    createdAt: new Date(),
                },
                ...prev,
            ];
            console.log(newTodos)
            localStorage.setItem("todos", JSON.stringify(newTodos))
            return newTodos;
        })
    }





    return (
        // @ts-ignore
        <todosContext.Provider value={{todos, handleAddTodo}}>
            {children}
        </todosContext.Provider>
    );
}

export function useTodos() {
    const todosContextValue = useContext(todosContext);
    if (!todosContextValue) {
        throw new Error("useTodos used outside of Provider");
    }

    return todosContextValue;
}