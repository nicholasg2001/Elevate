import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toast: {},
  isWorkoutModalOpen: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toast: (state, action) => {
      state.toast = action.payload;
    },
    openWorkoutModal: (state) => {
      state.isWorkoutModalOpen = true;
    },
    closeWorkoutModal: (state) => {
      state.isWorkoutModalOpen = false;
    },
  },
});

export default globalSlice.reducer;
export const { toast, openWorkoutModal, closeWorkoutModal } =
  globalSlice.actions;
