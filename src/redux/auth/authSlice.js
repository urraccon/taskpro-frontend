import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register, updateUser } from './operations';

const handleFulfilled = (state, action) => {
  state.token = action.payload.token;
  state.user = action.payload.user;
  state.isLoggedIn = true;
};

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder

      .addCase(register.fulfilled, handleFulfilled)

      .addCase(logIn.fulfilled, handleFulfilled)

      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })

      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })

      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })

      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })

      // .addCase(changeTheme.fulfilled, (state, action) => {
      //   state.user.theme = action.payload.theme;
      // })

      // .addCase(changeTheme.rejected, (state, action) => {
      //   state.error = action.payload;
      // })

      .addCase(updateUser.fulfilled, (state, action) => {
        const { name, email, avatar } = action.payload;
        state.user = { ...state.user, name, email, avatar };
      });
  },
});

const authReducer = authSlice.reducer;
const persistConfigAuth = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const persistReducerAuth = persistReducer(persistConfigAuth, authReducer);
