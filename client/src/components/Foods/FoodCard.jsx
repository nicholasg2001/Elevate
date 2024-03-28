const FoodCard = ({ food, onClick }) => {
  return (
    <div
      className="w-full flex flex-col border border-gray-300 rounded-lg shadow-xl"
      onClick={onClick}
    >
      <div className="flex justify-center bg-white rounded-lg h-10 items-center">
        {food.name}
      </div>
      <div className="bg-gray-300 p-4">
        <span className="flex justify-center">Calories: {food.calories}</span>
        <div className="flex flex-col">
          <div className="flex justify-evenly">
            <div>Protein: {food.protein} g</div>
            <div>Fat: {food.fat} g</div>
          </div>

          <div className="flex justify-evenly">
            <div>Carbohydrate: {food.carbs} g</div>
            <div>Fiber: {food.fiber} g</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
