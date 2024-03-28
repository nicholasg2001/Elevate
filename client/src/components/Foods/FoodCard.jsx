import { Link } from "react-router-dom";
import { openFoodModal } from "../../redux/feats/global/globalSlice";
import { useAppDispatch } from "../../redux/store";
import { IoFastFood } from "react-icons/io5";
import defaultFood from "../../assets/defaultFood.jpg";
const FoodCard = ({ food, onClick }) => {
  const dispatch = useAppDispatch();
  return (
    <div
      className="w-full flex flex-col border border-gray-300 rounded-lg shadow-xl"
      onClick={onClick}
    >
      <div className="flex justify-center bg-white">
        <img
          className="rounded-t-lg h-44"
          src={food.img ?? defaultFood}
          alt=""
        />
      </div>
      <div className="flex justify-center bg-white rounded-lg h-10 items-center">
        {food.name}
      </div>
      <div className="bg-blue-300 p-4">
        <span className="flex justify-center">Calories: {food.calories}</span>
        <div className="flex flex-col">
          <div className="flex justify-evenly">
            <div>Protein: {food.protein}g</div>
            <div>Fat: {food.fat}g</div>
          </div>

          <div className="flex justify-evenly">
            <div>Carbohydrate: {food.carbs}g</div>
            <div>Fiber: {food.fiber}g</div>
          </div>
        </div>
        <div className="flex justify-around mt-4">
          <Link
            to={"/auth/ "}
            className="inline-flex items-center justify-end px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Nutritions
            <IoFastFood size={16} className="ml-2" />
          </Link>
          <button
            className="inline-flex items-center justify-end px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            onClick={() => dispatch(openFoodModal())}
          >
            Add Food
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
