import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let BASE_URL = "http://localhost:3001/api/videos/";

export const videoAPI = createApi({
    reducerPath: "videoAPI",
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
      credentials: 'omit',
    }),
    endpoints: (builder) => ({
      getVideo: builder.query({
        query: ({ name }) => ({
          url: `/${name}`,
          method: "GET",
        }),
        providesTags: ['video']
        })
    })
});

export const { useGetVideoQuery } = videoAPI;