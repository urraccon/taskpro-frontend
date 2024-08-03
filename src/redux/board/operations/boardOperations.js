import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBoardList = createAsyncThunk(
  "boards/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/boards");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.rersponse.data);
    }
  }
);

export const fetchBoard = createAsyncThunk(
  "boards/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/boards/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addBoard = createAsyncThunk(
  "boards/add",
  async (newBoard, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/boards", newBoard);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateBoard = createAsyncThunk(
  "boards/update",
  async ({ id, values }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/api/boards/${id}`, values);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeBoard = createAsyncThunk(
  "boards/remove",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/api/boards/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
