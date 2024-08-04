import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/";

export const support = createAsyncThunk(
  "api/users/help",
  async ({ comment }, thunkAPI) => {
    try {
      const { data } = await axios.post("api/users/help", {
        comment,
      });

      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);
