import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  clear,
  setRefreshToken,
  setToken,
} from "@/app/(auth)/_api/tokenService";

interface AuthState {
  token: string | null;
  userName: string | null;
  refreshToken: string | null;
  getUserName: string | null;
}

const initialState: AuthState = {
  token: null,
  refreshToken: null,
  userName: null,
  getUserName: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTokens: (
      state,
      action: PayloadAction<{ token: string; refreshToken: string }>,
    ) => {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      setRefreshToken(state.refreshToken);
      setToken(state.token);
    },
    clearTokens: (state) => {
      state.token = null;
      clear();
      localStorage.clear();
    },
    userName: (state, action: PayloadAction<{ userName: string }>) => {
      localStorage.setItem("userName", action.payload.userName);
      state.userName = localStorage.getItem("userName");
    },
    getUserName: (state) => {
      state.getUserName = localStorage.getItem("userName");
    },
  },
});

export const { setTokens, clearTokens, userName, getUserName } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
