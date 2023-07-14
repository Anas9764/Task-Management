"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { TodoUpdateProps, Todo, TodosContext, Filter } from "../lib/types";

export const todosContext = createContext<TodosContext | null>(null);

export function TodosProvider({ children }: { children: ReactNode }) {
  // The state variable todos is expected to be an array of Todo objects.
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const newTodos = localStorage.getItem("todos") || "[]";
      return JSON.parse(newTodos) as Todo[];
    } catch (e) {
      return [];
    }
  }); //an array of Todo objects
  function handleAddTodo(task: string) {
    setTodos((prev) => {
      // we will create a new array
      const newTodos: Todo[] = [
        {
          id: Math.random().toString(),
          task,
          // description,
          status: Filter.Todo,
          createdAt: new Date(),
        },
        ...prev,
      ];
      console.log(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  }

  // toggleTodoAsCompleted
  const toggleTodoAsCompleted = (porps: TodoUpdateProps) => {
    const { id, status } = porps;
    setTodos((prev) => {
      // console.log("completed "+ prev.map((val) => val ))
      const newTodos = prev.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            status: status,
          };
        }
        return task;
      });
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  // handleDeleteTodo
  function handleDeleteTodo(id: string) {
    setTodos((prev) => {
      const newTodos = prev.filter((task) => task.id !== id);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  }

  // handleUpdateTodo
  // TODO: TO BE DONE LATER ON 
  function handleUpdateTodo(id: string) {
    setTodos((prev) => {
      const newTodos = prev.filter((task) => task.id == id);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  }

  return (
    <todosContext.Provider
      value={{ todos, handleAddTodo, toggleTodoAsCompleted, handleDeleteTodo }}
    >
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
