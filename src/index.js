import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { Provider } from "react-redux";
import store from "./redux/store";
import './normalize.css';
import './globalStyles.css';

// import test from './utils/test.js'
// test()

ReactDOM.render(
  <Provider store={store}>
	<App />
  </Provider>,
  document.getElementById("root")
);
