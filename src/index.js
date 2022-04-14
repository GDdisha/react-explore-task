// TABLE OF CONTENTS
// [Components]
//  Index
//  App
//  Header
//  Footer
//  Data
//  List
//  SingleItem
//  Detail
//  Cart
//  CustomizedBadges
// [CSS]
//  App
//  index
//  Header
//  Footer
//  Singleitem
//  Detail
//  Cart

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
