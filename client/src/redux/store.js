import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import authSliceReducer from "../redux/feats/auth/authSlice";
import globalSliceReducer from "./feats/global/globalSlice";
import { userAPI } from "./services/UserService";
import { workoutAPI } from "./services/WorkoutService";
import { dailyWorkoutAPI } from "./services/DailyWorkoutService";
import { videoAPI } from "./services/VideoService";
const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    global: globalSliceReducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [workoutAPI.reducerPath]: workoutAPI.reducer,
    [dailyWorkoutAPI.reducerPath]: dailyWorkoutAPI.reducer,
    [videoAPI.reducerPath]: videoAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userAPI.middleware)
      .concat(workoutAPI.middleware)
      .concat(dailyWorkoutAPI.middleware)
      .concat(videoAPI.middleware),
});

export default store;

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
