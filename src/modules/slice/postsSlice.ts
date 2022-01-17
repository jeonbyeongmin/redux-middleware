import { createSlice } from "@reduxjs/toolkit";
import { PostsState } from "../models/postsModel";

const initialState = {
  loading: false,
  data: null,
  error: null,
} as PostsState;

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state) => {
      state.loading = true;
    },
    getPostsSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    getPostsError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { getPosts, getPostsSuccess, getPostsError } = postsSlice.actions;
