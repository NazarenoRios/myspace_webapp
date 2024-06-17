import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openTable: false,
  darkBackground: false,
  selectedOption: null,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setOpenTable: (state, action) => {
      state.openTable = action.payload;
    },
    setDarkBackground: (state, action) => {
      state.darkBackground = action.payload;
    },
    setSelectedOption: (state, action) => {
      state.selectedOption = action.payload;
      localStorage.setItem("selectedOption", action.payload.toString());
    },
    initializeSelectedOptionFromLocalStorage: (state: any) => {
      const savedOption = localStorage.getItem("selectedOption");
      state.selectedOption =
        savedOption !== null ? parseInt(savedOption) : null;
    },
  },
});

export const {
  setOpenTable,
  setDarkBackground,
  setSelectedOption,
  initializeSelectedOptionFromLocalStorage,
} = sidebarSlice.actions;

export default sidebarSlice.reducer;
