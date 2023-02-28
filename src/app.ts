// Import React and ReactDOM
import React from "react";
import { createRoot } from "react-dom/client";
import ZMP from "zmp-framework/core/lite-bundle"; // Import ZMP
import "zmp-ui/zaui.css";
import "zmp-framework/zmp-bundle.min.css"; // Import ZMP Styles
import ZMPReact from "zmp-framework/react"; // Import ZMP-React Plugin
import "./css/tailwind.css"; // Import tailwind styles
import App from "./components/app"; // Import App Component
import appConfig from "../app-config.json";

if (!window.APP_CONFIG) {
  window.APP_CONFIG = appConfig;
}

// Init ZMP React Plugin
ZMP.use(ZMPReact);

// Mount React App
const root = createRoot(document.getElementById("app")!);
root.render(React.createElement(App));
