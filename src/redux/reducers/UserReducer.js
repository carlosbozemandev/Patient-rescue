import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "redux/actions";

const initialUserState = {
  isLoading: false,
  userData: {},
  errorMessage: "",
  successMessage: "",
};

const UserReducer = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    userLogout: (state) => {
      state.userData = {};
    },
    clearUserNotification: (state) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(userLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.userData = payload;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      // Add user to the state array
      state.isLoading = false;
      state.errorMessage = action?.payload?.error_description;
    });
  },
});
const { userLogout, clearUserNotification } = UserReducer.actions;

export { userLogout, clearUserNotification };
export default UserReducer.reducer;
