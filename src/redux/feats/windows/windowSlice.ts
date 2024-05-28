import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WindowState {
  openWindows: Record<string, boolean>; //{ [key: string]: boolean; }
}

const initialState: WindowState = {
  openWindows: {},
};

export const windowSlice = createSlice({
  name: "windows",
  initialState,
  reducers: {
    toggleWindow: (state, action: PayloadAction<string>) => {
      const windowId = action.payload;
      state.openWindows[windowId] = !state.openWindows[windowId];
    },
  },
});

export const { toggleWindow } = windowSlice.actions;
export default windowSlice.reducer;
