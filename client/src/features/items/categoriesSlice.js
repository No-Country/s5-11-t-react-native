import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'https://s5-11-t-react-native.up.railway.app/api/categories';

export const todosCategories = createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => '/',
    }),
  }),
});

export const { useGetTodosCategories } = todosCategories;
