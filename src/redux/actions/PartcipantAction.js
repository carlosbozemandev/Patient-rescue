import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "constants";
import { fetcher } from "utils";

const getParticipant = createAsyncThunk(
  "participant/all",
  async ({ value, token, ...other }, { rejectWithValue }) => {
    const options = {
      url: API_URL.PARTICIPANT_LIST,
      headers: { Authorization: `Bearer ${token}` },
      params: {
        ...value,
        ...other,
      },
    };
    try {
      const data = await fetcher(options);
      return data;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);

const getParticipantsByMosqueAndSession = createAsyncThunk(
  "participants/byMosqueAndSession",
  async ({ value, token, ...other }, { rejectWithValue }) => {
    const options = {
      url: API_URL.PARTICIPANTS_BY_MOSQUE_AND_SESSION + value,
      headers: { Authorization: `Bearer ${token}` },
      params: {
        ...other,
      },
    };
    try {
      const data = await fetcher(options);
      return data;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);

export { getParticipant, getParticipantsByMosqueAndSession };
