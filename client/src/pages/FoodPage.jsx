import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import FoodsContainer from "../components/Foods/FoodsContainer";
import CustomToasts from "../components/Toasts/CustomToasts";

const FoodPage = () => {
  const [foodSearch, setFoodSearch] = useState("");
  const [querySearch, setQuerySearch] = useState([]);
  const formHandler = async (event) => {
    event.preventDefault();
    const id = import.meta.env.VITE_APP_ID;
    const key = import.meta.env.VITE_APP_KEY;
    axios
      .get(
        `https://api.edamam.com/api/food-database/v2/parser?app_id=${id}&app_key=${key}&ingr=${foodSearch}`
      )
      .then((res) => {
        setQuerySearch(res.data.hints);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="mt-4">
      <form className="max-w-md mx-auto" onSubmit={formHandler}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <CiSearch size={20} />
          </div>
          <input
            type="search"
            onChange={(event) => setFoodSearch(event.target.value)}
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Food Search"
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      <FoodsContainer search={querySearch} />
      <CustomToasts />
    </div>
  );
};

export default FoodPage;
