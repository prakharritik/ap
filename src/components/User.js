import React from "react";
import { Routes, Route } from "react-router-dom";
import UserAccount from "./UserAccount";
import UserProfile from "./UserProfile";

const User = () => {
  return (
    <div>
      <p>User</p>
      <Routes>
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/account" element={<UserAccount />} />
      </Routes>
    </div>
  );
};

export default User;
