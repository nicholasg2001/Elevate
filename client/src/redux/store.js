import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import authSliceReducer from "../redux/feats/auth/authSlice";
import globalSliceReducer from "./feats/global/globalSlice";
import { userAPI } from "./services/UserService";
import { workoutAPI } from "./services/WorkoutService";
import { dailyWorkoutAPI } from "./services/DailyWorkoutService";
import { videoAPI } from "./services/VideoService";
import { dailyFoodAPI } from "./services/DailyFoodService";
import { favoriteWorkoutsAPI } from "./services/FavoriteWorkoutsService";
const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    global: globalSliceReducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [workoutAPI.reducerPath]: workoutAPI.reducer,
    [dailyWorkoutAPI.reducerPath]: dailyWorkoutAPI.reducer,
    [dailyFoodAPI.reducerPath]: dailyFoodAPI.reducer,
    [videoAPI.reducerPath]: videoAPI.reducer,
    [favoriteWorkoutsAPI.reducerPath]: favoriteWorkoutsAPI.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userAPI.middleware)
      .concat(workoutAPI.middleware)
      .concat(dailyWorkoutAPI.middleware)
      .concat(dailyFoodAPI.middleware)
      .concat(videoAPI.middleware)
      .concat(favoriteWorkoutsAPI.middleware)
});

export default store;

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
