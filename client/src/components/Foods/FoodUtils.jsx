export const transformFoodData = (response) => {
  const result = [];
  for (const hint of response) {
    result.push(transform(hint));
  }
  return result;
};

const transform = (hint) => {
  let food = {};
  food.calories = Number((hint.food.nutrients?.ENERC_KCAL ?? 0).toFixed(2));
  food.fat = Number((hint.food.nutrients?.FAT ?? 0).toFixed(2));
  food.protein = Number((hint.food.nutrients?.PROCNT ?? 0).toFixed(2));
  food.fiber = Number((hint.food.nutrients?.FIBTG ?? 0).toFixed(2));
  food.carbs = Number((hint.food.nutrients?.CHOCDF ?? 0).toFixed(2));
  food.food_id = hint.food.foodId;
  food.name = hint.food.label;
  food.img = hint.food.image;
  return food;
};
