/* eslint-disable */

import { createSlice } from '@reduxjs/toolkit'

import { IArticle } from '../../services/types'

export interface UserState {
  articles: IArticle[]
}

const initialState: UserState = {
  articles: [],
}

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload
    },
  },
})
export const { setArticles } = articlesSlice.actions

export default articlesSlice.reducer
