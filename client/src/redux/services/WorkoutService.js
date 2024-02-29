import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let BASE_URL = "http://localhost:3001/api/workouts";

export const workoutAPI = createApi({
  reducerPath: "workoutAPI",
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
    getAllWorkouts: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["Workouts"],
    }),
    getWorkoutByName: builder.query({
      query: ({ name }) => ({
        url: `/${name}`,
        method: "GET",
      }),
      providesTags: ["Hobbies"],
    }),
    getWorkoutsByMuscle: builder.query({
      query: ({ muscle }) => ({
        url: `/muscle/${muscle}`,
        method: "GET",
      }),
      providesTags: ["Workouts"],
    }),
    getWorkoutsByType: builder.query({
      query: ({ type }) => ({
        url: `/type/${type}`,
        method: "GET",
      }),
      providesTags: ["Workouts"],
    }),
    getWorkoutsByDifficulty: builder.query({
      query: ({ difficulty }) => ({
        url: `/difficulty/${difficulty}`,
        method: "GET",
      }),
      providesTags: ["Workouts"],
    }),
  }),
});

export const { useGetAllWorkoutsQuery } = workoutAPI;
