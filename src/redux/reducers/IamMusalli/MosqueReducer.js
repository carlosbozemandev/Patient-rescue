import { createSlice } from "@reduxjs/toolkit";
import { getMosqueListByActiveSession } from "redux/actions";

const initialMosqueState = {
  isLoading: false,
  mosqueData: [],
  errorMessage: "",
  successMessage: "",
};

const MosqueReducer = createSlice({
  name: "mosque",
  initialState: initialMosqueState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder.addCase(getMosqueListByActiveSession.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMosqueListByActiveSession.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.mosqueData = payload;
      state.errorMessage = "";
    });
    builder.addCase(getMosqueListByActiveSession.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action?.payload?.message;
    });
  },
});

export default MosqueReducer.reducer;
