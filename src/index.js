import React from "react"; // nạp thư viện react
import ReactDOM from "react-dom"; // nạp thư viện react-dom
import App from "./App";

if (module.hot) module.hot.accept();

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById("root"));
