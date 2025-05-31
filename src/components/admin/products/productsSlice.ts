import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IPagination } from "../../../types/IPagination";

const initialState: IPagination = {
  page: 1,
  limit: 6,
};

const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    prevPage: (state) => {
      if (state.page > 1) {
        state.page -= 1;
      }
    },
    nextPage: (state) => {
      state.page += 1;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { prevPage, nextPage, setLimit, setPage } = productsSlice.actions;
export default productsSlice.reducer;
