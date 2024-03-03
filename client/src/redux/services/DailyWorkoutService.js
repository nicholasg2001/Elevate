import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let BASE_URL = "http://localhost:3001/api/dailyworkouts";

export const dailyWorkoutAPI = createApi({
  reducerPath: "dailyWorkoutAPI",
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
    getAllDailyWorkouts: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["DailyWorkouts"],
    }),
    addDailyWorkout: builder.mutation({
      query: ({ sets, reps, workout_id }) => ({
        url: "/",
        method: "POST",
        body: { sets, reps, workout_id },
      }),
      invalidatesTags: ["DailyWorkouts"],
    }),
    updateDailyWorkout: builder.mutation({
      query: () => ({
        url: "/",
        method: "POST",
      }),
      invalidatesTags: ["DailyWorkouts"],
    }),
  }),
});

export const {
  useAddDailyWorkoutMutation,
  useGetAllDailyWorkoutsQuery,
  useLazyGetAllDailyWorkoutsQuery,
} = dailyWorkoutAPI;
