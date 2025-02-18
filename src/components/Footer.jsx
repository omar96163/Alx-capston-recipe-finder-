import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="lg:flex items-center gap-5">
      <div
        className="border-2 bg-opacity-30 bg-white p-5 rounded-3xl lg:rounded-l-none 
        dark:bg-black dark:text-white hover:scale-105 lg:rounded-r-full
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
        dark:bg-opacity-30 mt-3 lg:mt-0 sm:flex justify-around lg:justify-between lg:w-[60%] lg:ml-auto"
      >
        <Link to="/" className="flex items-center gap-3 justify-center">
          <img
            src="/Images/recipe-logo.jpg"
            alt="recipe-logo"
            className="sm:w-20 sm:h-20 w-16 h-16 rounded-full hover:scale-110 transition hover:-rotate-90 
            hover:shadow-xl opacity-80 hover:opacity-100"
          />
          <h1 className="text-sm md:text-2xl hover:text-orange-500">
            The Recipe
          </h1>
        </Link>
        <div
          className="bg-white mt-3 p-3 bg-opacity-30 rounded-xl flex items-center justify-center sm:gap-6 gap-5
          hover:shadow-2xl border-2 dark:bg-black dark:text-white dark:hover:shadow-white 
          dark:hover:shadow-md dark:bg-opacity-30 text-sm md:text-lg"
        >
          <p>Contact us :</p>
          <a href="https://n.com/omar96163" title="github" target="_blank">
            <img
              src="/Images/github.webp"
              alt="github"
              className="h-9 w-9 rounded-full hover:scale-125 transition"
            />
          </a>
          <a href="https://n.com/omaralbaz444" title="X" target="_blank">
            <img
              src="/Images/x.jpeg"
              alt="X"
              className="h-9 w-9 rounded-full hover:scale-125 transition"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
