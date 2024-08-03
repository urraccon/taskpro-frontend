import { createSlice } from "@reduxjs/toolkit";
import { support } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  email: "",
  text: "",
  isLoading: false,
  error: null,
};

const supportSlice = createSlice({
  name: "support",
  initialState,
  extraReducers: (builder) => {
    builder

      .addCase(support.pending, handlePending)

      .addCase(support.fulfilled, (state, { payload }) => {
        state.email = payload;
        state.text = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(support.rejected, handleRejected);
  },
});

export const supportReducer = supportSlice.reducer;
