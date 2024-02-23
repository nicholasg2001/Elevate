import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import authSliceReducer from "../redux/feats/auth/authSlice";
import globalSliceReducer from "./feats/global/globalSlice";
import { userAPI } from "./services/UserService";
const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    global: globalSliceReducer,
    [userAPI.reducerPath]: userAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAPI.middleware),
});

export default store;

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
