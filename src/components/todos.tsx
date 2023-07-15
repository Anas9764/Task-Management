"use client";
import React, { useState, useEffect } from "react";
import { useTodos } from "@/store/todos";
import { useSearchParams } from "next/navigation";
import { Filter, Todo } from "@/lib/types";

// make a switch case function to filter todos as described below

const filterTodos = (todos: Todo[], filter: any) => {
  switch (filter) { 
    case Filter.Todo:
      return todos.filter((todo) => todo.status === Filter.Todo);
    case Filter.inProgress:
      return todos.filter((todo) => todo.status === Filter.inProgress);
    case Filter.Completed:
      return todos.filter((todo) => todo.status === Filter.Completed);
    default:
      return todos;
  }
};

export const Todos = () => {
  const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();

  const searchParams = useSearchParams();
  const filterString: any = searchParams.get("todos");
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>(todos);

  console.log("params " + filterString);

  useEffect(() => {
    setFilteredTodos(filterTodos(todos, filterString));
    console.log("filteredTodos " + filteredTodos);
  }, [filterString, todos]);

  return (
    <ul className="main-task">
      {filteredTodos.map((todo) => {
        return (
          <li
            className="grid grid-cols-3 items-center w-96 h-14 border-2 text-3xl
                    "
            key={todo.id}
          >

        
            <input
              type="checkbox"
            // type="radio"

              id={`todo-${todo.id}`}
              checked={todo.status === Filter.Completed}
              onChange={() => {

                toggleTodoAsCompleted({
                  id: todo.id,
                  status: Filter.Completed,
                });
              }}
            />
<input
              // type="checkbox"
            type="radio"

              id={`todo-${todo.id}`}
              checked={todo.status === Filter.inProgress}
              onChange={() => {
                toggleTodoAsCompleted({
                  id: todo.id,
                  status: Filter.inProgress,
                });
              }}
            />
   

            <label htmlFor={`todo-${todo.id}`}> {todo.task}</label>
            {/* TODO: do same for if its in progress */}
            {todo.status === Filter.Completed && (
              <button
                className="h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-red-600 rounded-lg focus:shadow-outline hover:bg-red-400"
                type="button"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};
