import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type {
  HighlightsResponse,
  RealtimeResponse,
  RoomsResponse,
} from '@/models/home';

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
    getRecommendedRooms: builder.query<RoomsResponse, string>({
      query: (trackingCode) =>
        `/get_room_recommend?tracking_code=${trackingCode}`,
    }),
  }),
});

export const realtimeApi = createApi({
  reducerPath: 'realtime',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: (builder) => ({
    getRealtime: builder.query<RealtimeResponse, void>({
      query: () => '/realtime.json',
    }),
  }),
});

export const { useGetHighlightsQuery, useGetRecommendedRoomsQuery } = homeApi;
export const { useGetRealtimeQuery } = realtimeApi;
