import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { API_RESPONSE_TEXT } from "constants";
import { createMember, searchMember } from "redux/actions";

const initialMemberState = {
  isLoading: false,
  memberData: [],
  errorMessage: "",
  successMessage: "",
};

const MemberReducer = createSlice({
  name: "member",
  initialState: initialMemberState,
  reducers: {
    clearMemberNotification: (state) => {
      state.errorMessage = "";
      state.successMessage = "";
    }, // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(createMember.fulfilled, (state) => {
      state.isLoading = false;
      state.successMessage = API_RESPONSE_TEXT.MEMBER.MEMBER_REGISTER_SUCCESS;
    });

    builder.addCase(searchMember.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.memberData = payload;
    });
    builder.addMatcher(isAnyOf(createMember.pending, searchMember.pending), (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(isAnyOf(createMember.rejected, searchMember.rejected), (state, action) => {
      // Add user to the state array
      state.isLoading = false;
      state.memberData = [];
      state.errorMessage = action?.payload?.message;
    });
  },
});
const { clearMemberNotification } = MemberReducer.actions;
export { clearMemberNotification };
export default MemberReducer.reducer;
