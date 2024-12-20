import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      <App />
      <a
        className="project-details"
        href="https://github.com/DheerajMahra/dheeraj-mahra-saaslabs"
        target="_blank"
      >
        <code>Dheeraj Mahra | Source code</code>
      </a>
    </>
  </StrictMode>
);
