import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { homeApi, realtimeApi } from './features/home/homeSlice';

export const store = configureStore({
  reducer: {
    [homeApi.reducerPath]: homeApi.reducer,
    [realtimeApi.reducerPath]: realtimeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(homeApi.middleware)
      .concat(realtimeApi.middleware),
});

setupListeners(store.dispatch);
