import { fetcher } from "utils";
import { API_URL } from "constants";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getMosqueListByActiveSession = createAsyncThunk(
  "mosque/get",
  async (_, { rejectWithValue }) => {
    const options = {
      url: API_URL.MOSQUE_LIST_BY_ACTIVE_SESSION,
    };
    try {
      const data = await fetcher(options);
      return data;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);

export { getMosqueListByActiveSession };
