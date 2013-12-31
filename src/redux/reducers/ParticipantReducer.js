import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getParticipant, getParticipantsByMosqueAndSession } from "redux/actions";
import { toast } from "utils";

const initialParticipantState = {
  isLoading: false,
  participantList: [],
  attendanceBulkList: [],
  participantResponse: {},
  attendanceBulkParticipantListResponce: {},
  errorMessage: "",
  successMessage: "",
};

const ParticipantReducer = createSlice({
  name: "participant",
  initialState: initialParticipantState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    clearParticipantNotification: (state) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed

    builder.addCase(getParticipant.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.participantList = payload.content;
      state.participantResponse = payload;
    });
    builder.addCase(getParticipantsByMosqueAndSession.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.attendanceBulkList = payload.content;
      state.attendanceBulkParticipantListResponce = payload;
    });
    builder.addMatcher(
      isAnyOf(getParticipant.pending, getParticipantsByMosqueAndSession.pending),
      (state) => {
        state.isLoading = true;
      }
    );
    builder.addMatcher(
      isAnyOf(getParticipant.rejected, getParticipantsByMosqueAndSession.rejected),
      (state, action) => {
        state.isLoading = false;
        toast({ type: "error", description: action?.payload?.message });
      }
    );
  },
});

const { clearParticipantNotification } = ParticipantReducer.actions;
export { clearParticipantNotification };
export default ParticipantReducer.reducer;
