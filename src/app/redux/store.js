"use client";
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/productsSlice";
import { productsApi } from "./features/productsApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);

export default store;
