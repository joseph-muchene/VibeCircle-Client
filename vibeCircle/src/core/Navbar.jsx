import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-4 mx-0 bg-slate-800 flex flex-col justify-between px-4 py-5 items-center md:mx-10 md:flex-row">
      <ul className="flex items-center relative">
        <li className="text-xl font-semibold text-white">vibe Circle</li>
        <div className={`py-3 md:hidden absolute left-40 `}>
          <button
            onClick={() => setOpen(!open)}
            className="text-white cursor-pointer"
          >
            {!open ? <FaBars /> : "x"}
          </button>
        </div>
      </ul>

      <div className=" md:block ">
        {open && (
          <ul className=" md:hidden items-center flex flex-col space-y-4 text-white cursor-pointer  md:flex-row md:space-x-4">
            <li className="mt-[1rem]">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/account"> Account</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <Link to="/friends">Friends</Link>
            </li>
            <li>
              <Link to="/blog">Chat</Link>
            </li>
            <li>
              <button className="rounded-md items-center bg-white text-black px-4 py-1.5 hover:bg-red-600 hover:text-white hover:animate-pulse transition-all ">
                logout
              </button>
            </li>
          </ul>
        )}
        <div className="hidden md:block">
          <ul className=" items-center flex flex-col space-y-4 text-white cursor-pointer  md:flex-row md:space-x-4">
            <li className="mt-[1rem]">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/account"> Account</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <Link to="/friends">Friends</Link>
            </li>
            <li>
              <Link to="/blog">Chat</Link>
            </li>
            <li>
              <button className="rounded-md items-center bg-white text-black px-4 py-1.5 hover:bg-red-600 hover:text-white hover:animate-pulse transition-all ">
                logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
