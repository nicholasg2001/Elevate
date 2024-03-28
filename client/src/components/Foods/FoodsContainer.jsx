import { useState, useEffect } from "react";
import FoodCard from "./FoodCard";
import AddDailyFoodModal from "../Modals/AddDailyFoodModal";
import { initialFoodData } from "./foodData";
import { transformFoodData } from "./FoodUtils";
const FoodContainer = ({ search }) => {
  const [foodID, setFoodID] = useState("");
  const [foods, setFoods] = useState(initialFoodData);

  useEffect(() => {
    if (search.length !== 0) {
      setFoods(transformFoodData(search));
    }
  }, [search]);
  return (
    <div className="container mx-auto p-4 lg:p-10 relative">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {foods.map((food) => (
          <FoodCard
            key={food.food_id}
            food={food}
            onClick={() => setFoodID(food.food_id)}
          />
        ))}
      </div>
      <AddDailyFoodModal food_id={foodID} />
    </div>
  );
};
export default FoodContainer;
