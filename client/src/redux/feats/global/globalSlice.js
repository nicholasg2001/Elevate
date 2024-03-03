import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toast: {
    state: false,
    message: "",
  },
  isWorkoutModalOpen: false,
  isGoogleSetupModalOpen: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toast: (state, action) => {
      state.toast.state = action.payload.state;
      state.toast.message = action.payload.message;
    },
    openWorkoutModal: (state) => {
      state.isWorkoutModalOpen = true;
    },
    closeWorkoutModal: (state) => {
      state.isWorkoutModalOpen = false;
    },
    openGoogleSetupModal: (state) => {
      state.isGoogleSetupModalOpen = true;
    },
    closeGoogleSetupModal: (state) => {
      state.isGoogleSetupModalOpen = false;
    },
  },
});

export default globalSlice.reducer;
export const {
  toast,
  openWorkoutModal,
  closeWorkoutModal,
  openGoogleSetupModal,
  closeGoogleSetupModal,
} = globalSlice.actions;
