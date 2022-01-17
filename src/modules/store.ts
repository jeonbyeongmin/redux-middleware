import { configureStore } from "@reduxjs/toolkit";
import { all, call, fork } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import { postsSaga } from "./saga/posts.saga";
import { postsSlice } from "./slice/posts.slice";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([fork(postsSaga)]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}

export const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
  },
  middleware: [sagaMiddleware, logger],
  devTools: true,
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
