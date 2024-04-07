import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toast: {
    state: false,
    message: "",
  },
  foodSelection: {
    label: "Select measurement",
    uri: "",
  },
  foodQuantity: 1,
  isWorkoutModalOpen: false,
  isFoodModalOpen: false,
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
    foodSelection: (state, action) => {
      state.foodSelection.label = action.payload.label;
      state.foodSelection.uri = action.payload.uri;
    },
    foodQuantity: (state, action) => {
      state.foodQuantity = action.payload
    },
    openWorkoutModal: (state) => {
      state.isWorkoutModalOpen = true;
    },
    closeWorkoutModal: (state) => {
      state.isWorkoutModalOpen = false;
    },
    openFoodModal: (state) => {
      state.isFoodModalOpen = true;
    },
    closeFoodModal: (state) => {
      state.isFoodModalOpen = false;
      state.foodSelection.label = "Select measurement";
      state.foodSelection.uri = "";
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
  foodSelection,
  foodQuantity,
  openWorkoutModal,
  closeWorkoutModal,
  openFoodModal,
  closeFoodModal,
  openGoogleSetupModal,
  closeGoogleSetupModal,
} = globalSlice.actions;
