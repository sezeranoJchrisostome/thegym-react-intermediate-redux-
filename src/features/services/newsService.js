import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllNews: builder.query({
      query: (topic) => {
        return `everything?q=${topic}&apiKey=${apiKey}`;
      },
    }),
    getAllSources: builder.query({
      query: (pageSize = 30, page = 1) =>
        `top-headlines/sources?apiKey=${apiKey}&pageSize=${pageSize}&page=${page}`,
    }),
    getTopTrends: builder.query({
      query: (pageSize = 10, page = 1) =>
        `top-headlines?country=us&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`,
    }),
    getArticleBySource: builder.query({
      query: (source) => `top-headlines?sources=${source}&apiKey=${apiKey}`,
    }),
  }),
});

export const {
  useGetAllNewsQuery,
  useGetAllSourcesQuery,
  useGetArticleBySourceQuery,
  useGetTopTrendsQuery,
} = newsApi;
