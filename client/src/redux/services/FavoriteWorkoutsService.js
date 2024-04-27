import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let BASE_URL = "http://localhost:3001/api/favoriteWorkouts";

export const favoriteWorkoutsAPI = createApi({
    reducerPath: "favoriteWorkoutsAPI",
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
        getAllFavoriteWorkouts: builder.query({
            query: () => ({
                url: "/",
                method: "GET",
            }),
            providesTags: ["favoriteWorkouts"],
        }),
        addFavoriteWorkouts: builder.mutation({
            query: ({ workout_id }) => ({
                url: "/",
                method: "POST",
                body: { workout_id },
            }),
            invalidatesTags: ["favoriteWorkouts"],
        }),
        deleteFavoriteWorkouts: builder.mutation({
            query: ({ workout_id }) => ({
                url: "/",
                method: "DELETE",
                body: { workout_id },
            }),
            invalidatesTags: ["favoriteWorkouts"],
        }),
    }),
});

export const {
    useGetAllFavoriteWorkoutsQuery,
    useAddFavoriteWorkoutsMutation,
    useDeleteFavoriteWorkoutsMutation
} = favoriteWorkoutsAPI;
