import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  user: {
    name: "",
    email: "",
    token: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    onLogin(state, action) {
      //onLoginAction
    },
    onLogout(state) {
      //onLogoutAction
    },
    updateToken(state, action) {
      //update token
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
