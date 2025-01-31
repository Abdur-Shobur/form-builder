import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getSession } from 'next-auth/react';
import { env } from '../../../lib';

const baseQuery = fetchBaseQuery({
  baseUrl: `${env.baseAPI}/api/v1/`,
  prepareHeaders: async (headers) => {
    const session = await getSession(); // Get session from NextAuth

    // if (session) {
    //   headers.set('Authorization', `Bearer ${session?.accessToken}`);
    // }

    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: 'api',

  baseQuery,
  endpoints: () => ({}),
  refetchOnReconnect: true,

  refetchOnFocus: true,
  tagTypes: [],
  keepUnusedDataFor: 50000,
});
