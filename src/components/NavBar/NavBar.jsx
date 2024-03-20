import { useState } from "react";
import Link from "../Link/Link";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
const NavBar = () => {
    const [open, setOpen] = useState(false);
    const dataRoutes = [
      { id: 1, path: "/api/data", name: "API Data" },
      { id: 2, path: "/props", name: "Props" },
      { id: 3, path: "/context", name: "Context API" },
      { id: 4, path: "/redux", name: "Redux" },
      { id: 5, path: "/storage", name: "Storage" },
    ];


    return (
      <nav className="text-black bg-yellow-200 p-6">
        <div onClick={() => setOpen(!open)} className="md:hidden">
          {open === true ? (
            <IoMdClose className="text-3xl" />
          ) : (
            <IoMenuOutline className="text-3xl"></IoMenuOutline>
          )}
        </div>
        {/* ${open ? '' : 'hidden'} == we can also use it in class name for hidden the menu and show the menu */}
        <ul
          className={`md:flex absolute md:static
            ${open ? "top-20" : "-top-64"}
         bg-yellow-100 md:bg-yellow-200 px-6`}
        >
          {dataRoutes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </nav>
    );
};

export default NavBar;