import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Providers } from "./providers";
import { ScrollTop } from "./utils/scroll";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <ScrollTop />
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
