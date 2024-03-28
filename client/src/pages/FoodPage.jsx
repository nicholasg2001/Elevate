import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import FoodsContainer from "../components/Foods/FoodsContainer";
import CustomToasts from "../components/Toasts/CustomToasts";

const FoodPage = () => {
  const [foodSearch, setFoodSearch] = useState("");
  return (
    <>
      <div className="flex justify-center">
        <div className="w-full lg:w-1/2 mx-4 lg:mx-auto mt-4">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <CiSearch size={20} />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 :bg-gray-700"
              placeholder="Search Foods"
              onChange={(e) => setFoodSearch(e.target.value)}
              required
            />
          </div>
        </div>
      </div>
      <FoodsContainer search={foodSearch} />
      <CustomToasts/>
    </>
  );
};

export default FoodPage;
