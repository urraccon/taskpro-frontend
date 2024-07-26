import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

// axios.defaults.baseURL = 'Live-server URL';
axios.defaults.baseURL = 'http://localhost:3001/';

const setToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common['Authorization'] = '';
};

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('api/auth/signup', credentials);

    setToken(data.token);

    return data;
  } catch (e) {
    toast.error(`Registration failed. ${e.response.data.message}`);

    return thunkAPI.rejectWithValue(e.message);
  }
});

export const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('api/auth/login', credentials);

    setToken(data.token);

    return data;
  } catch (e) {
    toast.error(`Login failed! ${e.response.data.message}`);

    return thunkAPI.rejectWithValue(e.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (c_, thunkAPI) => {
  try {
    const { data } = await axios.post('api/auth/logout');

    clearToken();

    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (!persistedToken) return thunkAPI.rejectWithValue('Unable to fetch user');

  setToken(persistedToken);

  try {
    const { data } = await axios.get('api/users/current');

    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const updateUser = createAsyncThunk('auth/update', async ({ body, cb }, thunkAPI) => {
  try {
    const { data } = await axios.patch('api/users/update', body, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    cb?.();

    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const deleteUser = createAsyncThunk('auth/delete', async ({ body, cb }, thunkAPI) => {
  try {
    const { data } = await axios.delete('api/users/delete', body, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    cb?.();

    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
