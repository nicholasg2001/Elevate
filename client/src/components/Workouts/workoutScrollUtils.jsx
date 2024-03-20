import axios from "axios";

const getAllWorkouts = async () => {
  try {
    const response = await axios.get("http://localhost:3001/api/workouts");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const LIMIT = 6;

export async function fetchWorkoutPage({ pageParam }) {
  try {
    const workouts = await getAllWorkouts();
    return {
      data: workouts.slice(pageParam, pageParam + LIMIT),
      currentPage: pageParam,
      nextPage:
        pageParam + LIMIT < workouts.length ? pageParam + LIMIT : null,
    };
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
}
