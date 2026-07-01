import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import ResumeUpload from "../pages/ResumeUpload";
import Interview from "../pages/Interview";
import Report from "../pages/Report";
import Profile from "../pages/Profile";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/upload" element={<ResumeUpload />} />
      <Route path="/interview" element={<Interview />} />
      <Route path="/report" element={<Report />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default AppRouter;