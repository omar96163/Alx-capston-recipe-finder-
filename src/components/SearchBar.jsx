import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";
import Get from "../services/get";

function SearchBar() {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, isError, data, error] = Get();
  const [userMeal, setuserMeal] = useState("");

  const onSubmit = (form) => {
    const formData = form.search.trim().toLowerCase();
    const formDataInMeals = data.meals.find(
      (meal) => meal.strMeal.toLowerCase() === formData
    );
    if (formDataInMeals) setuserMeal(formDataInMeals);
    else setuserMeal(null);
    reset();
  };

  if (isLoading) return <p className="text-red-700">Loading...</p>;
  if (isError) return <p className="text-red-700">Error: {error.message}</p>;

  const allmeals = data.meals.map((meal) => meal.strMeal);

  return (
    <div className="flex flex-col items-center gap-6">
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 text-center">
        <input
          placeholder="search with meal"
          {...register("search")}
          className="p-3 text-orange-500 rounded-xl bg-white dark:bg-black mx-3"
        />
        <input
          value="Search"
          type="submit"
          className="p-[6px] rounded-lg hover:text-orange-500 cursor-pointer mt-3
          hover:ring-1 hover:ring-orange-500 bg-white dark:bg-black dark:text-white dark:hover:text-orange-500"
        />
      </form>
      <div>
        {userMeal == null ? (
          <div>{alert(`thies meal is not found try : ${allmeals}`)}</div>
        ) : userMeal == "" ? (
          <></>
        ) : (
          <Link to={`/RecipeDetails/:${userMeal.idMeal}`} state={{ userMeal }}>
            <div
              className="flex items-center justify-center rounded-md
              dark:text-white border-2 hover:shadow-2xl hover:scale-105 
              transition bg-opacity-30 bg-white dark:bg-black dark:bg-opacity-30"
            >
              <img
                src={userMeal.strMealThumb}
                alt="meal photo"
                className="sm:w-52 w-28 rounded-2xl p-2"
              />
              <div className="flex flex-col items-center text-[13px] sm:text-xl">
                <p className=" font-semibold p-2 mx-auto w-fit">
                  {userMeal.strMeal}
                </p>
                <p className="p-2">
                  category :{" "}
                  <i className="text-orange-500">{userMeal.strCategory}</i>
                </p>
                <p className="p-2">
                  Area : <i className="text-orange-500">{userMeal.strArea}</i>
                </p>
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
