import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  username: string;
  email: string;
  token: string | null;
}

const initialState: UserState = {
  username: "",
  email: "",
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },

    logout: (state) => {
      state.username = "";
      state.email = "";
      state.token = null;
    },
  },
});
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
