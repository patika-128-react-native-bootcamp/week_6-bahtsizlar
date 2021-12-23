import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL, TIME_STAMP, PUBLIC_KEY, HASH} from '@env';

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}`,
  }),
  tagTypes: ['Characters'],
  endpoints: builder => ({
    getAllCharacters: builder.query({
      query: () =>
        `/public/characters?ts=${TIME_STAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}`,
      providesTags: (result, error, arg) => [{type: 'Characters', id: arg}],
    }),
    getCharacterById: builder.query({
      query: characterId =>
        `/public/characters/${characterId}/?ts=${TIME_STAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}`,
      providesTags: (result, error, arg) => [{type: 'Characters', id: arg}],
    }),
  }),
});

export const {useGetAllCharactersQuery, useGetCharacterByIdQuery} =
  charactersApi;
