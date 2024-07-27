import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const changeTheme = createAsyncThunk('theme/change', async (newObject, thunkAPI) => {
  try {
    const { data } = await axios.patch('api/users/themes', newObject);

    return data;
  } catch ({ message }) {
    return thunkAPI.rejectWithValue(message);
  }
});
