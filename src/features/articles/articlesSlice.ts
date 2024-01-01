import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  articles: any[];
}

const initialState: UserState = {
  articles: [],
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload;
    },
  },
});
export const { setArticles } = articlesSlice.actions;

export default articlesSlice.reducer;
