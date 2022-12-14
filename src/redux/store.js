import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./ConfigureStore.User";
import { tmdbApi } from "./tmdbApi";

const store = configureStore({
  reducer: {
    userReducer,
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),
});

export default store;
