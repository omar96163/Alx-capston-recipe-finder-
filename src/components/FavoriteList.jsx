import React from "react";
import { useContext, useState, useEffect } from "react";
import { Theme } from "../App";
import Nav from "./Nav";
import Footer from "./Footer";

function FavoriteList() {
  const darkmod = useContext(Theme);
  const [favlist, setfavlist] = useState(() => {
    const savedList = localStorage.getItem("favlist");
    return savedList === "" ? [] : JSON.parse(savedList);
  });

  useEffect(() => {
    localStorage.setItem("favlist", JSON.stringify(favlist));
  }, [favlist]);

  const remMeal = (idMeal, strMeal) => {
    const updatedList = favlist.filter((meal) => meal.idMeal !== idMeal);
    setfavlist(updatedList);
    alert(`"${strMeal}" removed from favorites!`);
  };

  return (
    <div className={`${darkmod && "dark"} font-serif`}>
      <div className="bg-[url('/Images/bg-w.webp')] dark:bg-[url('/Images/bg-b.avif')] bg-cover bg-center">
        <div className=" bg-white py-5 px-3 sm:px-16 bg-opacity-20 dark:bg-black dark:bg-opacity-70 lg:h-screen min-h-screen">
          <Nav />
          <div className="h-[2px] my-8 bg-white"></div>
          <h2
            className="text-3xl mx-auto w-fit my-5 dark:text-white bg-white 
            bg-opacity-50 border-2 p-3 text-[20px]
            rounded-md dark:bg-black dark:bg-opacity-50 text-center"
          >
            Your Favorite Meals
          </h2>
          <div className="lg:h-[40%] lg:overflow-auto">
            {favlist && favlist.length > 0 ? (
              <div
                className="bg-white bg-opacity-30 p-5 rounded-md lg:mx-20 dark:bg-black 
                dark:bg-opacity-30"
              >
                {favlist.map((meal) => (
                  <div
                    key={meal.idMeal}
                    className="flex justify-between items-center lg:mx-4 my-2 p-4 bg-white 
                    bg-opacity-40 
                    rounded-md dark:bg-black dark:text-white hover:scale-105 transition 
                    dark:bg-opacity-40"
                  >
                    <div className="flex items-center justify-start gap-6 flex-wrap">
                      <img
                        src={meal.strMealThumb}
                        alt="meal photo"
                        className="h-20 rounded-md hover:ring-2 hover:ring-orange-500"
                      />
                      <p className="text-center">"{meal.strMeal}"</p>
                      <p className="block text-[12px]">
                        Category :{" "}
                        <i className="text-orange-500 font-thin">
                          {meal.strCategory}
                        </i>
                      </p>
                      <p className="hidden md:block">
                        Area :{" "}
                        <i className="text-orange-500 font-thin">
                          {meal.strArea}
                        </i>
                      </p>
                    </div>
                    <button
                      title="remove from your fav list"
                      className="p-2 rounded-lg text-white bg-red-700 hover:bg-opacity-50 ml-2"
                      onClick={() => remMeal(meal.idMeal, meal.strMeal)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p
                className="text-[16px] sm:text-xl mx-auto w-fit my-5 text-orange-500
                bg-white bg-opacity-50 border-2 p-3 rounded-2xl 
                dark:bg-black dark:bg-opacity-50 text-center"
              >
                No favorite meals yet !
              </p>
            )}
          </div>
          <div className="h-[2px] my-9 bg-white"></div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default FavoriteList;
