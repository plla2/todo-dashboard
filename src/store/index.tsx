import { configureStore } from "@reduxjs/toolkit";
import { tasksSlice } from "./Tasks.store";
import { ModalSlice } from "./Modal.store";

const store = configureStore({
  reducer: { tasks: tasksSlice.reducer, modal: ModalSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
