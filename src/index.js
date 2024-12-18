import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating max={5} color="#fcc419" size={40} />
    <StarRating max={9} color="blue" /> */}
  </React.StrictMode>
);