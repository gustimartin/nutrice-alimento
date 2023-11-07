"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://nutrice-alimento.vercel.app/api",
  }),
  tagTypes: ["reload"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
      providesTags: ["reload"],
    }),
    // getProductDetail: builder.query({
    //   query: (id) => `/products/${id} `,
    // }),
    createProduct: builder.mutation({
      query: (product) => ({
        url: "/products",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["reload"],
    }),
    createCategory: builder.mutation({
      query: (category) => ({
        url: "/categories",
        method: "POST",
        body: category,
      }),
      invalidatesTags: ["reload"],
    }),
    getCategories: builder.query({
      query: () => "/categories",
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useGetAllProductsQuery,
  useGetCategoriesQuery,
  useCreateProductMutation,
} = productsApi;
