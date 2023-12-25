import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  email: string;
  token: string | null;
}

const initialState: UserState = {
  email: "",
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
  },
});
export const { login } = userSlice.actions;

export default userSlice.reducer;
