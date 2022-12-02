import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    isAuth: false,
    user: null,
    role: null,
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.isAuth = true;
      state.user = action.payload.user;
      state.role = action.payload.role;

      localStorage.setItem("token", state.token);
      localStorage.setItem("isAuth", true);
      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("role", state.role);
    },
    logout: (state) => {
      state.token = "";
      state.isAuth = false;
      state.user = null;
      state.role = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
