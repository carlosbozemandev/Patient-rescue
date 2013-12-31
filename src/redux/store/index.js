import { configureStore } from "@reduxjs/toolkit";
import { UserReducer, MemberReducer, ParticipantReducer, MosqueReducer } from "redux/reducers";

const store = configureStore({
  reducer: {
    user: UserReducer,
    member: MemberReducer,
    participant: ParticipantReducer,
    mosque: MosqueReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
