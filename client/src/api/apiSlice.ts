import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// http://localhost:4003/api/v1

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4003/api/v1" }),
  reducerPath: "adminApi",
  tagTypes: ["User", "Products", "RoleUser", "Geography", "Sales", "Admins", "Performance", "Dashboard"],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getproducts: build.query({
      query: () => "client/productsstat",
      providesTags: ["Products"],
    }),
    getRoleUser: build.query({
      query: () => "client/customers",
      providesTags: ["RoleUser"],
    }),
    getGeography: build.query({
      query: () => "client/geography",
      providesTags: ["Geography"],
    }),
    getSales: build.query({
      query: () => "sales/sales",
      providesTags: ["Sales"],
    }),
    getAdmins: build.query({
      query: () => "management/admins",
      providesTags: ["Admins"],
    }),
    getUserPerformance: build.query({
      query: (id) => `management/performance/${id}`,
      providesTags: ["Performance"],
    }),
    getDashboard: build.query({
      query: () => 'general/dashboard',
      providesTags: ["Dashboard"],
    }),
  }),
});

export const { useGetUserQuery, useGetproductsQuery, useGetRoleUserQuery, useGetGeographyQuery, useGetSalesQuery, useGetAdminsQuery, useGetUserPerformanceQuery, useGetDashboardQuery } = api;
