import axiosBaseQuery from "@/lib/axiosBaseQuery";
import { createApi } from '@reduxjs/toolkit/query/react';

const characterApi = createApi({
    reducerPath: 'characterApi',
    baseQuery: axiosBaseQuery(),
    endpoints: (builder) => ({
        getCharacters: builder.query({
            query: ({ page = 1, gender = "", status = "" }) => ({
                url: `character?page=${page}&gender=${gender}&status=${status}`, // URL'ye parametre ekliyoruz
                method: 'GET',
            }),
        }),
        getCharacterById: builder.query({
            query: (id) => ({
                url: `character/${id}`,
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery } = characterApi;
export default characterApi;
