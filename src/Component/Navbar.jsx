import React, { useState } from "react";
import { menu, close, logo } from "../images/main";
import { navLinks } from "../Constants/main";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="img" className="w-[124px]" />
      <ul className="list-none sm:flex  hidden justify-end items-center flex-1">
        {navLinks.map((link, i) => (
          <li
            key={link.id}
            className={`text-white ${i === link.length - 1 ? "mr-0" : "mr-10"}`}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 items-center justify-end">
        <img
          src={toggle ? close : menu}
          alt="img"
          className="w-[28px] h-[28px] cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute right-0 top-20  mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((link, i) => (
              <li
                key={link.id}
                className={`text-white ${
                  i === link.length - 1 ? "mr-0" : "mb-4"
                }`}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
