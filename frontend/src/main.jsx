import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Contact from "./pages/Contact";
import CreateAccount from "./pages/CreateAccount";
import Connexion from "./pages/Connexion";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/createAccount" element={<CreateAccount />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
