import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  username: string;
  email: string;
  token: string | null;
  image: string;
}

const initialState: UserState = {
  username: "",
  email: "",
  token: null,
  image: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.image = action.payload.image;
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
