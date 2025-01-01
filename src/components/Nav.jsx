import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const Menu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex items-center justify-between">
      <Link to="/" className="flex items-center">
        <img
          src="/Images/recipe-logo.jpg"
          alt="recipe-logo"
          className="sm:w-24 sm:h-24 w-16 h-16 rounded-full hover:scale-110 transition 
          hover:rotate-90 hover:shadow-xl opacity-80 hover:opacity-100"
        />
        <h1
          className="ml-3 font-bold text-sm sm:text-2xl hover:text-orange-500 
          dark:text-white dark:hover:text-orange-500"
        >
          The Recipe
        </h1>
      </Link>
      <div
        className="hidden md:block space-x-7 bg-white p-4 rounded-2xl hover:shadow-xl 
        border-2 dark:bg-black dark:text-white dark:hover:shadow-white 
        dark:hover:shadow-md bg-opacity-30 dark:bg-opacity-30"
      >
        <Link
          to="/"
          className="hover:bg-slate-900 dark:hover:bg-white p-2 hover:text-orange-500 rounded-xl"
        >
          <button>Home</button>
        </Link>
        <Link
          to="/FavoriteList"
          className="hover:bg-slate-900 dark:hover:bg-white p-2 hover:text-orange-500 rounded-xl"
        >
          <button>Favorite List</button>
        </Link>
      </div>
      <div className="block md:hidden">
        <button
          onClick={Menu}
          className="absolute right-14 top-[42px] sm:relative sm:right-0 sm:top-0"
        >
          <div>
            <div className="dark:bg-white bg-black h-[2px] w-[20px] m-1"></div>
            <div className="dark:bg-white bg-black h-[2px] w-[25px] m-1"></div>
            <div className="dark:bg-white bg-black h-[2px] w-[15px] m-1"></div>
          </div>
        </button>
        {menuOpen ? (
          <div
            className="absolute right-3 top-24 dark:bg-white dark:bg-opacity-80 text-white dark:text-black 
            bg-black bg-opacity-80 p-5 rounded-lg shadow-lg"
          >
            <Link
              to="/"
              className="block dark:hover:bg-slate-900 hover:bg-white p-2 my-4 hover:text-orange-500 
              rounded-xl"
            >
              <button>Home</button>
            </Link>
            <Link
              to="/FavoriteList"
              className="block dark:hover:bg-slate-900 hover:bg-white p-2 my-4 hover:text-orange-500 
              rounded-xl"
            >
              <button>Favorite List</button>
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
}

export default Nav;
