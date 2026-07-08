import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import App from "./App";

import { AuthProvider } from "./context/AuthContext";
import { InterviewProvider } from "./context/interview/InterviewContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <InterviewProvider>
          <App />

          <Toaster
            position="top-right"
            reverseOrder={false}
          />
        </InterviewProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);