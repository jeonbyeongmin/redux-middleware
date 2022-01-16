import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import App from "./App";
import rootReducer from "./modules";
import ReduxThunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

const store = createStore(
  rootReducer,

  // logger를 사용하는 경우에는 Logger가 가장 마지막에 와야합니다.
  // 리덕스는 이렇게 미들웨어를 여러개 등록할 수 있습니다.
  composeWithDevTools(applyMiddleware(ReduxThunk, logger))
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);
