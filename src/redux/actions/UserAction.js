import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "constants";
import { fetcher } from "utils";

const userLogin = createAsyncThunk("user/login", async (loginCredentials, { rejectWithValue }) => {
  const options = {
    url: API_URL.LOGIN,
    method: "POST",
    data: {
      grant_type: "password",
      client_id: "bs-admin-client",
      client_secret: "pin",
      ...loginCredentials,
    },
    headers: { "Content-Type": "multipart/form-data" },
  };
  try {
    const data = await fetcher(options);
    return data;
  } catch (err) {
    return rejectWithValue(err?.response?.data);
  }
});

export { userLogin };
