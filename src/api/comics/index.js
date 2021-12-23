import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL, TIME_STAMP, PUBLIC_KEY, HASH} from '@env';

export const comicsApi = createApi({
  reducerPath: 'comicsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}`,
  }),
  tagTypes: ['Comics'],
  endpoints: builder => ({
    getAllComics: builder.query({
      query: () =>
        `/public/comics?ts=${TIME_STAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}`,
      providesTags: (result, error, arg) => [{type: 'Comics', id: arg}],
    }),
    getComicById: builder.query({
      query: comicId =>
        `/public/comics/${comicId}/?ts=${TIME_STAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}`,
      providesTags: (result, error, arg) => [{type: 'Comic', id: arg}],
    }),
  }),
});

export const {useGetAllComicsQuery, useGetComicByIdQuery} = comicsApi;
