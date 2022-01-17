import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import { PostsState } from "../models/posts.model";
import { getPosts, getPostsError, getPostsSuccess } from "../slice/posts.slice";
import * as postsAPI from "../../api/posts";
import { AxiosResponse } from "axios";

function* getPostsSaga(action: PayloadAction<PostsState>) {
  try {
    const payload: AxiosResponse = yield call(postsAPI.getPosts);
    yield put(getPostsSuccess(payload));
  } catch (e) {
    yield put(getPostsError(e));
  }
}

export function* postsSaga() {
  yield takeEvery(getPosts.type, getPostsSaga);
}
