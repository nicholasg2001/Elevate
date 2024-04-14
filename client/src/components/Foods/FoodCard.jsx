import { Link } from "react-router-dom";
import { openFoodModal } from "../../redux/feats/global/globalSlice";
import { useAppDispatch } from "../../redux/store";
import { IoFastFood } from "react-icons/io5";
import defaultFood from "../../assets/defaultFood.jpg";
const FoodCard = ({ food, onClick }) => {
  const dispatch = useAppDispatch();
  return (
    <div
      className="w-full flex flex-col border border-gray-300 rounded-lg shadow-xl cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-center bg-white">
        <img
          className="rounded-t-lg h-44"
          src={food.img ?? defaultFood}
          alt=""
        />
      </div>
      <div className="flex justify-center dark:bg-slate-400 h-10 items-center">
        {food.name}
      </div>
      <div className="bg-blue-300  dark:bg-slate-400 p-4">
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
      </div>
    </div>
  );
};

export default FoodCard;
