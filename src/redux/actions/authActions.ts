import { createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../api/client';
import { ENDPOINTS } from '../../api/endpoints';

export const loginAction = createAsyncThunk(
  'auth/loginAction',
  async (credentials: { username: string; password: string; }, { rejectWithValue }) => {
    try {
      const response = await apiClient.post(ENDPOINTS.AUTH.LOGIN, credentials);

      if (response.data && response.data.status === 'success') {
        return response.data.data;
      } else {
        return rejectWithValue(response.data.message || 'Login failed.');
      }
    } catch (error: any) {
      console.error('Login Error:', error);
      return rejectWithValue(error.response?.data?.message || 'Login failed.');
    }
  }
);
