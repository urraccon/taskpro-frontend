import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { persistReducerAuth } from "./auth/authSlice";

import { persistBoardReducer } from "./board/boardSlice";

import { supportReducer } from "./support/supportSlice";



export const store = configureStore({
  reducer: {
    auth: persistReducerAuth,

    board: persistBoardReducer,

    support: supportReducer,
    

  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
