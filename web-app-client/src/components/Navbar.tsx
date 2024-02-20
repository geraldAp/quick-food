import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaRegUserCircle,
  FaShoppingCart,
  FaRegHeart,
  FaSearch,
} from "react-icons/fa";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "All Meals",
    path: "/all-meals",
  },
];

const Navbar = () => {
  return (
    <nav className="text-customOrange  ">
      <div className="w-full p-4 flex justify-between">
        <div>
          <h1 className="text-orange-400 font-bold text-2xl">
            Quick <span className="text-customOrange">Steeze</span>
          </h1>
        </div>
        <ul className="flex gap-6 items-center">
          {navLinks.map((link, i) => (
            <NavLink key={i} to={link.path}>
              <li>{link.name}</li>
            </NavLink>
          ))}
        </ul>

        <div>
          <NavLink to="/contact">
            <div className="bg-customOrange text-white px-7 py-2 hover:bg-orange-400 rounded-md font-semibold text-base duration-300 ease-in ">
              <span>Contact</span>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="bg-orange-400 w-full justify-between p-4 flex items-center">
        <div className="text-white pl-6">
          <FaRegUserCircle className="text-3xl" />
        </div>
        <div className="w-[33.3%] relative px-2">
          <input
            className="w-full p-2 text-gray-900 text-sm h-10 outline-none rounded-full"
            type="text"
            placeholder="Search Products"
          />
          <FaSearch className="absolute top-[22.3%] text-2xl right-5" />
        </div>
        <div className="flex text-white items-center gap-5 pr-6">
          <div>
            <FaShoppingCart className="text-xl" />
          </div>
          <div>
            <FaRegHeart className="text-xl" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
