import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { newsApi } from '../services/newsService'
import newsReducer from "../news/newSlice"
import sourceReducer from "../news/sourceSlice"

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
    activeNews: newsReducer,
    activeSource: sourceReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
})

setupListeners(store.dispatch)