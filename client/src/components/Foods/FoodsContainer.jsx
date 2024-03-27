import { useState } from "react";
import FoodCard from "./FoodCard";
const FoodContainer = () => {
  const [foodID, setFoodID] = useState(0);
  const mockFoodData = [
    {
      food_id: "1",
      name: "Pizza",
      calories: "410",
      protein: "14",
      fat: "23",
      fiber: "2",
    },
    {
      food_id: "2",
      name: "Burger",
      calories: "240",
      protein: "20",
      fat: "10",
      fiber: "3",
    },
    {
      food_id: "3",
      name: "Water",
      calories: "0",
      protein: "0",
      fat: "0",
      fiber: "0",
    },
    {
      food_id: "4",
      name: "French Fries",
      calories: "210",
      protein: "2",
      fat: "20",
      fiber: "5",
    },
    {
      food_id: "5",
      name: "Hot Dogs",
      calories: "324",
      protein: "20",
      fat: "15",
      fiber: "3",
    },
    {
      food_id: "6",
      name: "Pancakes",
      calories: "200",
      protein: "2",
      fat: "20",
      fiber: "8",
    },
  ];
  return (
    <div className="container mx-auto p-4 lg:p-10 relative">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {mockFoodData.map((food) => (
          <FoodCard
            key={food.food_id}
            food={food}
            onClick={() => setFoodID(food.food_id)}
          />
        ))}
      </div>
    </div>
  );
};
export default FoodContainer;
