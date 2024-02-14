import Axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

let BASE_URL = "http://localhost:3001/api/auth";

export const loginUser = createAsyncThunk(
  "api/auth",
  async (user, { rejectWithValue }) => {
    try {
      const data = await Axios.post(`${BASE_URL}/login`, user);
      localStorage.setItem("token", data.data.token); // consider removing
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const registerUser = createAsyncThunk(
  "/api/auth",
  async (user, { rejectWithValue }) => {
    try {
      const result = await Axios.post(`${BASE_URL}/register`, user);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
