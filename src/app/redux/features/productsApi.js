"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  tagTypes: ["reload"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
      providesTags: ["reload"],
    }),
    // createProduct: builder.mutation({
    //   query: (product) => ({
    //     url: "/products",
    //     method: "POST",
    //     body: product,
    //     // headers: {
    //     //   "Content-Type": "multipart/form-data",
    //     // },
    //   }),
    //   invalidatesTags: ["reload"],
    // }),
    // createCategory: builder.mutation({
    //   query: (category) => ({
    //     url: "/category",
    //     method: "POST",
    //     body: category,
    //     // headers: {
    //     //   "Content-Type": "multipart/form-data",
    //     // },
    //   }),
    //   invalidatesTags: ["reload"],
    // }),
    getCategories: builder.query({
      query: () => "/categories",
    }),
  }),
});

export const { useGetAllProductsQuery, useGetCategoriesQuery } = productsApi;
