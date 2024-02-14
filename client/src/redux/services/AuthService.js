import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let BASE_URL = "http://localhost:3001/auth";

export const authAPI = createApi({
  reducerPath: "authAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: ({ email, password }) => ({
        url: "/login",
        method: "POST",
        body: { email, password },
      }),
    }),
  }),
});

export const { useGetUsersQuery } = authAPI;
