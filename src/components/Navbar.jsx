import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { TiThMenuOutline } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-50`} >
      <div className="w-full flex justify-between items-center max-w-7xl max-auto">
        <Link
          to="/"
          className="flex i`tems-center gap-2 "
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* <img src={logo} alt="logo" className="w-9 h-9 object-contain" />   */}
          <p className=" text-[18px] font-bold cursor-pointer uppercase border py-1 px-2 mx-2 rounded-md text-black hover:text-white bg-white hover:bg-slate-300 ">
            mano Ragupathy
          </p>
        </Link>
        <button
          className="sm:hidden  text-[30px] p-1 uppercase cursor-pointer"
          onClick={() => handleToggle()}
        >
          {toggle ? <IoClose /> : <TiThMenuOutline />}
        </button>
        {toggle ? (
          <div className="md:hidden absolute top-20 right-10 bg-gradient-to-b from-black-200 from-70% to-black-100 to-100%  rounded-sm">
            <ul className="">
              {navLinks.map((navlist) => (
                <li
                  key={navlist.id}
                  className={`${
                    active === navlist.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer py-1 px-2`}
                  onClick={() => handleToggle()}
                >
                  <a href={`#${navlist.id}`}>{navlist.title}</a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          " "
        )}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((navlist) => (
            <li
              key={navlist.id}
              className={`${
                active === navlist.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <a href={`#${navlist.id}`}>{navlist.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
