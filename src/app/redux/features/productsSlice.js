"use client";
import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
  },
  reducers: {},
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
