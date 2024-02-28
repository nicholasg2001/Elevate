import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import authSliceReducer from "../redux/feats/auth/authSlice";
import globalSliceReducer from "./feats/global/globalSlice";
import { userAPI } from "./services/UserService";
import { workoutAPI } from "./services/WorkoutService";
const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    global: globalSliceReducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [workoutAPI.reducerPath]: workoutAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userAPI.middleware)
      .concat(workoutAPI.middleware),
});

export default store;

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
