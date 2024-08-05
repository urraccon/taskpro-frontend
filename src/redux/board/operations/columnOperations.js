import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchColumnList = createAsyncThunk(
  "columns/fetchAll",
  async (boardId, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/columns", boardId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchColumn = createAsyncThunk(
  "columns/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/columns/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addColumn = createAsyncThunk(
  "columns/add",
  async (newColumn, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/columns", newColumn);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateColumn = createAsyncThunk(
  "columns/update",
  async ({ id, values }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/api/columns/${id}`, values);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeColumn = createAsyncThunk(
  "columns/remove",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/api/column/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.reponse.data);
    }
  }
);
