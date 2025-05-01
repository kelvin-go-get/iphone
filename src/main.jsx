import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://9b07706294248ea2c94a9a0a0e94de11@o4509249577746432.ingest.us.sentry.io/4509249581547520",
  sendDefaultPii: true
});


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
