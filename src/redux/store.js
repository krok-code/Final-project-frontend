import { configureStore } from '@reduxjs/toolkit';
import { modalReducer } from './modal/modalSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const authConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

export const store = configureStore({
  reducer: {
    modal: modalReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
