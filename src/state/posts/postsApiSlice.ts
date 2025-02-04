import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "../../types/Posts";

export const postApiSlice = createApi({
    reducerPath: 'posts',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com"
    }),
    endpoints: (builder) => {
        return {
            getPosts: builder.query<Post[], {limit: number, offset: number}>({
                query: ({limit, offset}) => `/posts?_limit=${limit}&_offset=${offset}`
            })
        }
    }
})

export const {useGetPostsQuery} = postApiSlice