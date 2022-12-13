import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (builder) => ({
    getTrending: builder.query({ query: () => `/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-us` }),
    getNetflixOriginals: builder.query({ query: () => `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213` }),
    getTopRated: builder.query({ query: () => `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-us` }),
    getActionMovies: builder.query({ query: () => `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28` }),
    getComedyMovies: builder.query({ query: () => `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35` }),
    getHorrorMovies: builder.query({ query: () => `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27` }),
    getRomanceMovies: builder.query({ query: () => `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749` }),
    getDocumentaries: builder.query({ query: () => `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99` }),
  }),
});

export const {
  useGetTrendingQuery,
  useGetNetflixOriginalsQuery,
  useGetTopRatedQuery,
  useGetActionMoviesQuery,
  useGetComedyMoviesQuery,
  useGetHorrorMoviesQuery,
  useGetRomanceMoviesQuery,
  useGetDocumentariesQuery
} = tmdbApi;
