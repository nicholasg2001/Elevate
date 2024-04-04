import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let BASE_URL = "http://localhost:3001/api/dailyFood";

export const dailyFoodAPI = createApi({
  reducerPath: "dailyFoodAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
    prepareHeaders: (headers, { getState }) => {
      headers.set("Accept", "application/json");
      headers.set("Cache-Control", "no-cache");
      headers.set("Pragma", "no-cache");
      headers.set("Expires", "0");

      const token = getState().auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
        return headers;
      }
    },
  }),
  endpoints: (builder) => ({
    getAllDailyFood: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["DailyFood"],
    }),
    addDailyFood: builder.mutation({
      query: ({ food_id }) => ({
        url: "/",
        method: "POST",
        body: { food_id },
      }),
      invalidatesTags: ["DailyFood"],
    }),
  }),
});

export const { useAddDailyFoodMutation, useGetAllDailyFoodQuery } =
  dailyFoodAPI;
