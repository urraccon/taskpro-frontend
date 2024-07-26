import { configureStore } from '@reduxjs/toolkit';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { persistReducerAuth } from './auth/authSlice';
/** from redux
 * Import boards.
 * My guess support should be imported here to. */

export const store = configureStore({
  reducer: {
    auth: persistReducerAuth,
    /** Add boards and suppport */
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
