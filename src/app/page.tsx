import React from 'react';
import AddTodo from "@/components/add-todo";
import Todos from "@/components/todos";

const Page = () => {
    return (
     <main>
         <h2>Task Management Application</h2>
         <AddTodo/>
         <Todos/>
     </main>
    );
};

export default Page;