import React from "react";
import AddTodo from "@/components/add-todo";
import { Todos } from "@/components/todos";
import Navbar from "@/components/navbar";
const Page = () => {
  return (
    <main className="flex flex-col content-center min-h-screen mt-4">
      <h2 className="text-8xl w-auto mt-8 mb-4 text-green-500 font-sansfont-sans">
        Task Management Application
      </h2>
      <Navbar />
      <AddTodo />
      <Todos />
    </main>
  );
};

export default Page;
