import { fetcher } from "utils";
import { API_URL } from "constants";
import { createAsyncThunk } from "@reduxjs/toolkit";

const createMember = createAsyncThunk(
  "member/create",
  async (createMemberData, { rejectWithValue }) => {
    const options = {
      method: "POST",
      url: API_URL.CREATE_MEMBERSHIP,
      data: { ...createMemberData },
    };
    try {
      const data = await fetcher(options);
      return data;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);

const searchMember = createAsyncThunk(
  "member/search",
  async ({ value, ...other }, { rejectWithValue }) => {
    const options = {
      url: API_URL.SEARCH_MEMBERSHIP,
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
export { createMember, searchMember };
