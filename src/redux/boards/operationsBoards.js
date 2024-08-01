import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const fetchAllBoard = createAsyncThunk(
  "boards/all",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/api/boards");
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchSingleBoard = createAsyncThunk(
  "boards/single",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/boards/${id}`);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createBoard = createAsyncThunk(
  "boards/create",

  async (board, thunkAPI) => {
    try {
      const { data } = await axios.post("/api/boards", board);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateBoard = createAsyncThunk(
  "boards/update",
  async (updateData, thunkAPI) => {
    try {
      const [id, board] = updateData;
      const { data } = await axios.patch(`/api/boards/${id}`, { ...board });
      return data;
    } catch (error) {
      toast.error(error.response.data.message);

      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  "boards/delete",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/api/boards/${id}`);
      return id;
    } catch (error) {
      toast.error(error.response.data.message);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
