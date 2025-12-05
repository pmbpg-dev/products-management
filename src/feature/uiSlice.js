import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  isBulkDelete: false,
};

const uiSlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userName = action.payload;
    },
    removeUser: (state) => {
      state.userName = "";
    },
    showBulkDelete: (state) => {
      state.isBulkDelete = true;
    },

    hideBulkDelete: (state) => {
      state.isBulkDelete = false;
    },
  },
});
export const { addUser, removeUser, showBulkDelete, hideBulkDelete } =
  uiSlice.actions;

export const selectUserName = (store) => store.ui.userName;
export const selectBulkDelete = (store) => store.ui.isBulkDelete;

export default uiSlice.reducer;
