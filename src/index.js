import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import './fonts/ExensaGrotesk-Bold.ttf'
import './fonts/ExensaGrotesk-Black.ttf'
import './fonts/ExensaGrotesk-ExtraBold.ttf'
import './fonts/ExensaGrotesk-Light.ttf'
import './fonts/ExensaGrotesk-Regular.ttf'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
