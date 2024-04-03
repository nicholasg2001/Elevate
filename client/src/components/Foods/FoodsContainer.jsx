import { useState, useEffect } from "react";
import FoodCard from "./FoodCard";
import AddDailyFoodModal from "../Modals/AddDailyFoodModal";
import { initialFoodData } from "./foodData";
import { transformFoodData } from "./FoodUtils";
import FoodModal from "../Modals/FoodModal";
import { useAppDispatch } from "../../redux/store";
import { openFoodModal } from "../../redux/feats/global/globalSlice";
const FoodContainer = ({ search }) => {
  const [foodID, setFoodID] = useState("");
  const [foods, setFoods] = useState(initialFoodData);
  const [foodName, setFoodName] = useState("");
  const [measures, setMeasures] = useState([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (search.length !== 0) {
      setFoods(transformFoodData(search));
    }
  }, [search]);
  const foodClickHandler = (food) => {
    setMeasures(food.measures);
    setFoodID(food.food_id);
    setFoodName(food.name);
    dispatch(openFoodModal());
  };
  return (
    <div className="container mx-auto p-4 lg:p-10 relative">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {foods.map((food) => (
          <FoodCard
            key={food.food_id}
            food={food}
            onClick={() => foodClickHandler(food)}
          />
        ))}
      </div>
      <FoodModal foodID={foodID} measures={measures} name={foodName} />
    </div>
  );
};
export default FoodContainer;
