import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCardList = createAsyncThunk(
  "cards/fetchAll",
  async (columnId, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/cards", columnId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchCard = createAsyncThunk(
  "cards/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/cards/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addCard = createAsyncThunk(
  "cards/add",
  async (newCard, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/cards", newCard);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateCard = createAsyncThunk(
  "cards/update",
  async ({ id, values }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/api/cards/${id}`, values);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeCard = createAsyncThunk(
  "cards/remove",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/api/cards/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.reponse.data);
    }
  }
);

export const moveCard = createAsyncThunk(
  "cards/move",
  async ({ id, columnId }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/api/cards/${id}/move`, { columnId });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
