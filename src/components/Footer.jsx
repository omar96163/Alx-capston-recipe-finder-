import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="lg:flex items-center gap-5">
      <div
        className="border-2 bg-opacity-30 bg-white p-5 rounded-3xl lg:rounded-l-none lg:rounded-r-full
        dark:bg-black dark:text-white hover:scale-105
        transition dark:bg-opacity-30 text-center h-fit"
      >
        <p className="">
          Develobed by : <i className="text-orange-500">Omar Albaz</i> / Front
          End Web Dev
        </p>
      </div>
      <div
        className="bg-white border-2 bg-opacity-30 p-5 rounded-3xl lg:rounded-r-none lg:rounded-l-full 
       dark:bg-black dark:text-white hover:scale-105 transition 
        dark:bg-opacity-30 mt-3 lg:mt-0 md:flex justify-between lg:w-[60%] lg:ml-auto"
      >
        <Link to="/" className="flex items-center gap-3 justify-center">
          <img
            src="public/Images/recipe-logo.jpg"
            alt="recipe-logo"
            className="sm:w-20 sm:h-20 w-16 h-16 rounded-full hover:scale-110 transition hover:-rotate-90 
            hover:shadow-xl opacity-80 hover:opacity-100"
          />
          <h1 className="text-sm sm:text-2xl hover:text-orange-500">
            The Recipe
          </h1>
        </Link>
        <div
          className="bg-white mt-3 p-3 bg-opacity-30 rounded-xl flex items-center justify-center sm:gap-6 gap-10
          hover:shadow-2xl border-2 dark:bg-black dark:text-white dark:hover:shadow-white 
          dark:hover:shadow-md dark:bg-opacity-30 text-sm sm:text-lg"
        >
          <p>Contact us :</p>
          <a href="https://github.com/omar96163" title="github" target="_blank">
            <img
              src="public/Images/social.png"
              alt="github"
              className="h-10 w-10 hover:scale-125"
            />
          </a>
          <a href="https://x.com/omaralbaz444" title="X" target="_blank">
            <img
              src="public/Images/twitter.png"
              alt="X"
              className="h-6 w-6 rounded-full hover:scale-125"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
