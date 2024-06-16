import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    openTable: false,
    darkBackground: false,
  },
  reducers: {
    setOpenTable: (state, action) => {
      state.openTable = action.payload;
    },
    setDarkBackground: (state, action) => {
      state.darkBackground = action.payload;
    },
  },
});

export const { setOpenTable, setDarkBackground } = sidebarSlice.actions;

export default sidebarSlice.reducer;
