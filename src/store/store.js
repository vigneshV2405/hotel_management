import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { hotelApi } from '../services/hotelApi';
import userReducer from './userSlice'

export const store = configureStore({
    reducer: {
        [hotelApi.reducerPath]: hotelApi.reducer,
        common:userReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(hotelApi.middleware),
  })
  
setupListeners(store.dispatch)