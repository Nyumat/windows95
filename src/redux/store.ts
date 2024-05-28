import { configureStore } from "@reduxjs/toolkit";
import windowSlice from "./feats/windows/windowSlice";

export const store = configureStore({
  reducer: {
    windows: windowSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
