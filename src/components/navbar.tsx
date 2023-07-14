"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
const Navbar = () => {
  const searchParams = useSearchParams();
  const todosFilter = searchParams.get("todos");
  console.log("navbar " + todosFilter);
  // h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800
  return (
    <nav className=" flex justify-between items-center w-3/5 mb-4 border-amber-100 border-b-4 text-6xl   ">
      <Link href="/" className={todosFilter === null ? "active" : ""}>
        {" "}
      <span className="h-10 px-5 m-2  transition-colors duration-150  rounded-lg focus:shadow-outline hover:bg-green-500">
      All{" "}
        </span>  
      </Link>
      <Link
        href="/?todos=todo"
        className={todosFilter === "active" ? "active" : ""}
      >
        {" "}
        <span className="h-10 px-5 m-2  transition-colors duration-150  rounded-lg focus:shadow-outline hover:bg-green-500">
        Active{" "}
        </span>
      </Link>
      <Link
        href="/?todos=progress"
        className={todosFilter === "active" ? "active" : ""}
      >
        {" "}
        <span className="h-10 px-5 m-2  transition-colors duration-150  rounded-lg focus:shadow-outline hover:bg-green-500">
        Progress{" "}
        </span>
      </Link>
      <Link
        href="/?todos=completed"
        className={todosFilter === "completed" ? "active" : ""}
      >
        {" "}
        <span className="h-10 px-5 m-2  transition-colors duration-150  rounded-lg focus:shadow-outline hover:bg-green-500">
        Completed{" "}
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;
