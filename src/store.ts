import { configureStore } from '@reduxjs/toolkit';

import AuthReducer from './redux/owner/AuthReducer';

export const store = configureStore({
    reducer: {
        AuthReducer: AuthReducer,
    },
  middleware: (getDefaultMiddleware:any) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})