import React from "react";

function Intro() {
  return (
    <div
      className="p-7 rounded-2xl hover:shadow-2xl 
      border-2 dark:text-white dark:hover:shadow-white dark:hover:shadow-md 
      bg-white bg-opacity-30 dark:bg-black dark:bg-opacity-30 w-fit mx-auto lg:mx-0"
    >
      <p className="text-xl md:text-4xl lg:text-5xl">
        Welcome to Recipes Collection
      </p>
      <p className="text-orange-500 mt-3 md:text-2xl lg:text-3xl">
        Your Gateway to Culinary Inspiration !
      </p>
      <p className="mt-7">
        Looking for delicious and easy-to-make recipes?{" "}
        <i className="text-orange-500">The Recipe</i> <br />
        is your ultimate destination to explore a variety of dishes <br />
        from classic favorites to innovative global cuisines. <br />
        Whether you are a beginner or a seasoned chef
      </p>
      <p className="mt-7 text-orange-500">
        Start your culinary journey today and add a special touch <br /> to your
        table with Recipes Collection !
      </p>
    </div>
  );
}

export default Intro;
