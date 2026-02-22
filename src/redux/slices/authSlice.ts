import { MARKIZ_NIGRAN, NIGRAN, TEACHER } from "@/src/constants/roles";
import { User, UserRole } from "@/src/types/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginAction } from "../actions/authActions";

export const accessibleFor: Record<number, UserRole> = {
  1: NIGRAN,
  2: TEACHER,
  3: MARKIZ_NIGRAN,
};

export const getUserRole = (
  userTypeId: string | number,
): UserRole | undefined => {
  return accessibleFor[Number(userTypeId)];
};

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginAction.fulfilled,
        (
          state,
          action: PayloadAction<{
            status: string;
            message: string;
            responseTime: null;
            data: User & { token: string; expiresIn: number };
          }>,
        ) => {
          const { token, expiresIn, ...user } = action.payload.data;

          state.loading = false;
          state.isLoggedIn = true;

          // full user object
          state.user = {
            ...user,
            role: getUserRole(user.userTypeId),
          };

          // token separately (recommended)
          state.token = action.payload.data.token;
        },
      )
      .addCase(loginAction.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload || "Login failed.";
      });
  },
});

export const { login, logout, clearError } = authSlice.actions;
export default authSlice.reducer;
