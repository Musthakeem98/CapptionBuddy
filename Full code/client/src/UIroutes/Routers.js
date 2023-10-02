import React from "react";
import { Routes, Route,Navigate } from "react-router-dom";
import Landingpage from "../pages/Landingpage";
import Login from "../pages/login";
import Home from "../pages/Home";
import History from "../pages/history";
import Account from "../pages/account";
import Type from "../pages/type";
import Profile from "../pages/profile";

export default function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to='/home'/>}/>
        <Route path="/home" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/type" element={<Type />} />
        <Route path="/account" element={<Account />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
