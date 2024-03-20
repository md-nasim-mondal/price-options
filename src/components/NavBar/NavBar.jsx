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
      <nav>
        <div onClick={() => setOpen(!open)} className="md:hidden">
          {open === true ? (
            <IoMdClose className="text-3xl" />
          ) : (
            <IoMenuOutline className="text-3xl"></IoMenuOutline>
          )}
        </div>
        <ul className="md:flex">
          {dataRoutes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </nav>
    );
};

export default NavBar;