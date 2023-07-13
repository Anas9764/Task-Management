'use client'
import Link from "next/link";
import {useSearchParams} from "next/navigation";
const Navbar = () => {

    const searchParams = useSearchParams();
    const todosFilter = searchParams.get("todos")
    console.log('navbar ' +  todosFilter)

    return (
        <nav className=" flex justify-between items-center w-96 mb-4 border-amber-100 border-b-4 text-lg" >
            <Link  href="/" className={(todosFilter === null) ? "active" : ""}> All  </Link>
            <Link href="/?todos=active" className={todosFilter === 'active' ? "active" : ""}> Active  </Link>
            <Link href="/?todos=completed" className={todosFilter === 'completed' ? "active" : ""}> Completed </Link>
        </nav>
    );
};

export default Navbar;