import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AuthPage from "./pages/Auth";
import LanguageSwitcher from "./components/LanguageSwitcher";
export default function App() {
  return (
    <Router>
      < Navbar />
      <Routes>
        {/* <Route index element={<Home />} /> */}
        <Route index element={<Home />} />
      </Routes>
    </Router>
  );
}
