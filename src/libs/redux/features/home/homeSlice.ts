import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { HighlightsResponse } from '@/models/home';

export const homeApi = createApi({
  reducerPath: 'home',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_PANTIP_HOME_API_URL,
    headers: {
      Ptauthorize: `Basic ${process.env.NEXT_PUBLIC_PANTIP_AUTH_KEY}`,
    },
  }),
  endpoints: (builder) => ({
    getHighlights: builder.query<HighlightsResponse, void>({
      query: () => '/get_highlight',
    }),
    getRecommendedRooms: builder.query({
      query: (trackingCode) =>
        `/get_room_recommend?tracking_code=${trackingCode}`,
    }),
  }),
});

export const { useGetHighlightsQuery, useGetRecommendedRoomsQuery } = homeApi;
