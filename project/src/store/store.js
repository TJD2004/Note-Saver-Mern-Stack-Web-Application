import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import fileSlice from './slices/fileSlice';
import themeSlice from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    files: fileSlice,
    theme: themeSlice,
  },
});