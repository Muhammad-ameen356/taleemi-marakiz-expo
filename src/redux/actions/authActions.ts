import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/client";
import { ENDPOINTS } from "../../api/endpoints";

export const loginAction = createAsyncThunk(
  "auth/loginAction",
  async (
    credentials: { username: string; password: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await apiClient.post(ENDPOINTS.AUTH.LOGIN, credentials);

      return response?.data;
    } catch (error: any) {
      console.error("Login Error:", error);
      return rejectWithValue(error.response?.data?.message || "Login failed.");
    }
  },
);
