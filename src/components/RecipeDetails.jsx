import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";
import { Theme } from "../App";

function RecipeDetails() {
  const location = useLocation();
  const { userMeal } = location.state;
  const darkmod = useContext(Theme);

  const [favlist, setfavlist] = useState(() => {
    const savedList = localStorage.getItem("favlist");

    if (!savedList) {
      return [];
    }

    try {
      return JSON.parse(savedList);
    } catch (error) {
      return [];
    }
  });

  const addMeal = () => {
    const mealInfavList = favlist.find(
      (meal) => meal.idMeal === userMeal.idMeal
    );
    if (mealInfavList) {
      alert(`"${userMeal.strMeal}" was added to your fav list "before"`);
    } else {
      setfavlist([...favlist, userMeal]);
      alert(`"${userMeal.strMeal}" added to your fav list`);
    }
  };

  const remMeal = () => {
    const mealInfavList = favlist.find(
      (meal) => meal.idMeal === userMeal.idMeal
    );
    if (mealInfavList) {
      setfavlist(favlist.filter((meal) => meal.idMeal !== userMeal.idMeal));
      alert(`"${userMeal.strMeal}" removed from your fav list`);
    } else {
      alert(`"${userMeal.strMeal}" is not in your fav list`);
    }
  };

  useEffect(() => {
    localStorage.setItem("favlist", JSON.stringify(favlist));
  }, [favlist]);

  return (
    <div className={`${darkmod && "dark"} font-serif`}>
      <div className="bg-[url('/Images/bg-w.webp')] dark:bg-[url('/Images/bg-b.avif')] bg-cover bg-center ">
        <div className=" bg-white py-5 px-3 sm:px-16 bg-opacity-20 dark:bg-black dark:bg-opacity-70">
          <Nav />
          <div className="h-[2px] my-8 bg-white"></div>
          <div className="flex items-center justify-around flex-wrap gap-5">
            <div
              className="flex flex-col items-center p-2 bg-white bg-opacity-40 
              rounded-md hover:ring-2 hover:ring-orange-400 tracking-[1px]
              dark:bg-black dark:text-white dark:bg-opacity-50 border-2 text-[12px]"
            >
              <p className=" font-semibold text-xl p-2 mx-auto w-fit">
                {userMeal.strMeal}
              </p>
              <p className="p-2">
                Category :{" "}
                <i className="text-orange-500 font-thin">
                  {userMeal.strCategory}
                </i>
              </p>
              <p className="p-2">
                Area :{" "}
                <i className="text-orange-500 font-thin">{userMeal.strArea}</i>
              </p>
              <a
                href={userMeal.strYoutube}
                className="font-semibold text-xl p-2 text-blue-800 hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube
              </a>
              <a
                href={userMeal.strSource}
                className="font-semibold text-xl p-2 text-blue-800 hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
              <div className="flex gap-4 p-2">
                <button
                  title="Add to your fav list"
                  className="p-2 rounded-lg text-white bg-green-700 hover:bg-opacity-50"
                  onClick={addMeal}
                >
                  Add
                </button>
                <button
                  title="remove from your fav list"
                  className="p-2 rounded-lg text-white bg-red-700 hover:bg-opacity-50"
                  onClick={remMeal}
                >
                  Remove
                </button>
              </div>
            </div>
            <img
              src={userMeal.strMealThumb}
              alt="meal photo"
              className="h-64 rounded-3xl p-2 dark:bg-black 
              bg-white bg-opacity-50 hover:ring-2 
              hover:ring-orange-400 dark:bg-opacity-50 border-2 my-3 "
            />
            <ul
              className="p-2 bg-white bg-opacity-40 rounded-md hover:ring-2 
              hover:ring-orange-400 dark:bg-black dark:text-white 
              dark:bg-opacity-50 border-2 text-[12px] tracking-[1px]"
            >
              <p className="font-semibold text-[18px] p-2 text-orange-500">
                Ingredients :
              </p>
              <li className="p-2">A . {userMeal.strIngredient1}</li>
              <li className="p-2">B . {userMeal.strIngredient2}</li>
              <li className="p-2">C . {userMeal.strIngredient3}</li>
              <li className="p-2">D . {userMeal.strIngredient4}</li>
              <li className="p-2">E . {userMeal.strIngredient5}</li>
            </ul>
          </div>
          <div
            className="dark:text-white bg-white bg-opacity-40 p-3 mt-6 
            rounded-md dark:bg-opacity-50 dark:bg-black border-2 tracking-[1px]"
          >
            <p className="font-semibold text-xl py-2 text-orange-500">
              Instructions :
            </p>
            <p>{userMeal.strInstructions}</p>
          </div>
          <div className="h-[2px] my-8 bg-white"></div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
