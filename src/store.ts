import { configureStore } from "@reduxjs/toolkit";
import productsPaginationReducer from "./components/admin/products/productsSlice";
import ordersPaginationReducer from "./components/admin/orders/ordersSlice";
import customersPaginationReducer from "./components/admin/customers/customersSlice";
import reviewsPaginationReducer from "./components/admin/reviews/reviewsSlice";
export const store = configureStore({
  reducer: {
    productsPage: productsPaginationReducer,
    ordersPage: ordersPaginationReducer,
    customersPage: customersPaginationReducer,
    reviewsPage: reviewsPaginationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
