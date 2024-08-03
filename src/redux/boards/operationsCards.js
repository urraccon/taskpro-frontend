import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const createCard = createAsyncThunk(
  'cards/create',
  async (credentials, thunkApi) => {
    try {
      const [id, newCard] = credentials;
      const { data } = await axios.post(`/api/cards/${id}`, newCard);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);

      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateCard = createAsyncThunk(
  'cards/update',
  async (credentials, thunkApi) => {
    try {
      const [cardId, updates] = credentials;

      const { data } = await axios.patch(`/api/cards/${cardId}`, updates);

      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteCard = createAsyncThunk(
  'cards/delete',
  async (id, thunkApi) => {
    try {
      await axios.delete(`/api/cards/${id}`);
      return id;
    } catch (error) {
      toast.error(error.response.data.message);

      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const replaceCard = createAsyncThunk(
  'cards/replace',
  async (credentials, thunkApi) => {
    try {
      // destination {"newColumnId ":"id"}
      const [cardId, destination] = credentials;
      const { data } = await axios.patch(
        `/api/cards/move/${cardId}`,
        destination
      );
      return data;
    } catch (error) {
      toast.error(error.response.data.message);

      return thunkApi.rejectWithValue(error.message);
    }
  }
);
