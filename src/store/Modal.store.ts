import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const ModalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {},
});

export const modalActions = ModalSlice.actions;
export default ModalSlice.reducer;
