/*
 * @Description:
 * @Date: 2020-01-04 10:31:58
 * @Author:
 * @LastEditors: robin
 * @LastEditTime: 2020-05-14 10:21:27
 */
import "core-js";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "antd-mobile/dist/antd-mobile.css";
import "animate.css";
import "./index.css";
import vConsole from "vconsole";
import fundebug from "fundebug-javascript";
import Root from "./router/Routes";

fundebug.apikey =
  "f9f75a99f9b0605df3745944281f3aa44680b70945f082190aed77a50b8b92f3";
if (window.location.host.indexOf("activity") !== 0) {
  new vConsole();
}
const mountNode = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>,
  mountNode
);
