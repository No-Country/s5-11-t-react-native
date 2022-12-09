import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { todosApi } from "../features/items/itemSlice";
import itemsReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
    cart: itemsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
